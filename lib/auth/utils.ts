import { auth } from '@clerk/nextjs/server'
import { SystemRoleType, OrganizationRoleType, UserRole } from './roles'
import { AuthError, AuthErrorType } from './errors'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function checkUserRole(userId: string, requiredRole?: UserRole): Promise<boolean> {
  if (!requiredRole) return true
  
  // TODO: DBからユーザーのロール情報を取得
  return true
}

export async function checkOrganizationAdmin(userId: string, organizationId: string): Promise<boolean> {
  // TODO: DBから組織の管理者権限をチェック
  return true
}

export async function checkSystemTeamMember(userId: string): Promise<boolean> {
  // TODO: DBからシステムチームメンバーかどうかをチェック
  return true
}

export async function requireAuth() {
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized')
  }
  return userId
}

// 認証済みユーザーの情報を取得
export async function getAuthenticatedUser() {
  try {
    const { userId } = await auth()
    if (!userId) {
      return null
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        memberships: {
          select: {
            organizationId: true,
            role: true
          }
        }
      }
    })

    return user
  } catch (error) {
    console.error('Error getting authenticated user:', error)
    return null
  }
}

// 組織のメンバーシップを取得
export async function getOrganizationMembership(userId: string, organizationId: string) {
  try {
    const membership = await prisma.organizationMembership.findFirst({
      where: {
        userId,
        organizationId
      }
    })

    return membership
  } catch (error) {
    console.error('Error getting organization membership:', error)
    return null
  }
}

// 認証エラーレスポンスを生成
export function createAuthErrorResponse(error: AuthErrorType) {
  return new Response(JSON.stringify({ error: error.message }), {
    status: error.code,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// 認証ミドルウェアのヘルパー関数
export async function withAuth(handler: (userId: string) => Promise<Response>) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return createAuthErrorResponse(AuthError.UNAUTHORIZED)
    }

    return await handler(userId)
  } catch (error) {
    console.error('Auth middleware error:', error)
    return createAuthErrorResponse(AuthError.INTERNAL_ERROR)
  }
}

// システムチーム認証ミドルウェアのヘルパー関数
export async function withSystemTeamAuth(handler: (userId: string) => Promise<Response>) {
  return withAuth(async (userId) => {
    const isSystemTeam = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { systemRole: true }
    }).then((user: { systemRole: SystemRoleType | null } | null) => user?.systemRole === 'system_team')

    if (!isSystemTeam) {
      return createAuthErrorResponse(AuthError.FORBIDDEN)
    }

    return await handler(userId)
  })
}

// 組織管理者認証ミドルウェアのヘルパー関数
export async function withOrganizationAdminAuth(organizationId: string, handler: (userId: string) => Promise<Response>) {
  return withAuth(async (userId) => {
    const isSystemTeam = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { systemRole: true }
    }).then((user: { systemRole: SystemRoleType | null } | null) => user?.systemRole === 'system_team')

    if (isSystemTeam) {
      return await handler(userId)
    }

    const membership = await prisma.organizationMembership.findFirst({
      where: {
        userId,
        organizationId,
        role: 'admin'
      }
    })

    if (!membership) {
      return createAuthErrorResponse(AuthError.FORBIDDEN)
    }

    return await handler(userId)
  })
} 