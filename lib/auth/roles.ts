import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

// システムロールの型定義
export type SystemRoleType = 'system_team' | null;

// 組織ロールの型定義
export type OrganizationRoleType = 'admin' | 'member';

// ユーザーロールの詳細情報の型定義
export interface UserRoleDetail {
  id: string
  userId: string
  role: SystemRoleType | OrganizationRoleType
  createdAt: Date
  updatedAt: Date
}

// ユーザーロールの型定義（システムロールまたは組織ロール）
export interface UserRole {
  systemRole: SystemRoleType | null
  organizationRoles: OrganizationRoleType[]
}

// ユーザーロールの詳細な型定義
interface UserRoles {
  systemRole: SystemRoleType
  organizationRoles: Map<string, OrganizationRoleType> // organizationId -> role
}

// メンバーシップの型定義
interface Membership {
  organizationId: string;
  role: OrganizationRoleType;
}

// 認証エラーの定義
export const AuthError = {
  UNAUTHORIZED: {
    message: '認証が必要です',
    code: 401
  },
  FORBIDDEN: {
    message: 'アクセス権限がありません',
    code: 403
  },
  NOT_FOUND: {
    message: 'リソースが見つかりません',
    code: 404
  }
} as const;

// 認証結果の型定義
export type AuthResult = {
  success: boolean;
  error?: typeof AuthError[keyof typeof AuthError];
};

// 認証済みユーザーの型定義
export type AuthenticatedUser = {
  id: string
  clerkId: string
  systemRole: SystemRoleType | null
  organizationMemberships: {
    organizationId: string
    role: OrganizationRoleType
  }[]
}

// システムロールの取得
export const getSystemRole = async (userId: string): Promise<SystemRoleType | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { systemRole: true }
    })
    return user?.systemRole || null
  } catch (error) {
    console.error('Error getting system role:', error)
    return null
  }
}

// 組織ロールの取得
export const getOrganizationRoles = async (userId: string, organizationId: string): Promise<OrganizationRoleType[]> => {
  try {
    const memberships = await prisma.organizationMembership.findMany({
      where: {
        user: { clerkId: userId },
        organizationId
      },
      select: { role: true }
    })
    return memberships.map((m: { role: OrganizationRoleType }) => m.role)
  } catch (error) {
    console.error('Error getting organization roles:', error)
    return []
  }
}

// ユーザーロールの取得
export const getUserRoles = async (userId: string, organizationId?: string): Promise<UserRole> => {
  const systemRole = await getSystemRole(userId)
  const organizationRoles = organizationId ? await getOrganizationRoles(userId, organizationId) : []
  return { systemRole, organizationRoles }
}

// システムチームメンバーのチェック
export const checkSystemTeamRole = async (userId: string): Promise<boolean> => {
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { systemRole: true }
  });
  return user?.systemRole === 'system_team';
}

// 組織管理者のチェック
export async function checkOrganizationAdmin(userId: string, organizationId: string) {
  try {
    console.log('管理者権限チェック - ユーザーID:', userId, '組織ID:', organizationId);

    // まずシステムチーム権限をチェック
    const user = await prisma.user.findUnique({ 
      where: { clerkId: userId },
      select: { systemRole: true }
    });
    console.log('ユーザー情報:', user);

    if (user?.systemRole === 'system_team') {
      console.log('管理者権限あり（システムチーム）');
      return true;
    }

    // 次に組織の管理者権限をチェック
    const membership = await prisma.organizationMembership.findFirst({
      where: {
        user: { clerkId: userId },
        organizationId,
        role: 'admin'
      },
      include: {
        user: true
      }
    });
    console.log('メンバーシップ:', membership);

    if (membership) {
      console.log('管理者権限あり（メンバーシップ）');
      return true;
    }

    console.log('管理者権限なし');
    return false;
  } catch (error) {
    console.error('管理者権限チェックエラー:', error);
    return false;
  }
}

// 組織メンバーのチェック
export async function isOrganizationMember(clerkId: string, organizationId: string): Promise<boolean> {
  const membership = await prisma.organizationMembership.findFirst({
    where: {
      user: { clerkId },
      organizationId,
      role: { in: ['admin', 'member'] }
    }
  })
  return !!membership
}

// 認証の要求
export async function requireAuth() {
  const { userId } = auth()
  if (!userId) {
    throw new Error('認証が必要です')
  }
  return userId
}

// システムチーム認証
export const systemTeamAuth = async (): Promise<AuthResult> => {
  try {
    const { userId } = auth()
    if (!userId) {
      return {
        success: false,
        error: AuthError.UNAUTHORIZED
      }
    }

    const isSystemTeam = await checkSystemTeamRole(userId)
    if (!isSystemTeam) {
      return {
        success: false,
        error: AuthError.FORBIDDEN
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Error in system team auth:', error)
    return {
      success: false,
      error: AuthError.UNAUTHORIZED
    }
  }
}

// 組織管理者認証
export const organizationAdminAuth = async (organizationId: string): Promise<AuthResult> => {
  try {
    const { userId } = auth()
    if (!userId) {
      return {
        success: false,
        error: AuthError.UNAUTHORIZED
      }
    }

    const isAdmin = await checkOrganizationAdmin(userId, organizationId)
    if (!isAdmin) {
      return {
        success: false,
        error: AuthError.FORBIDDEN
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Error in organization admin auth:', error)
    return {
      success: false,
      error: AuthError.UNAUTHORIZED
    }
  }
}

// ユーザーロールのチェック
export async function checkUserRole(userId: string, requiredRole?: SystemRoleType | OrganizationRoleType): Promise<boolean> {
  if (!requiredRole) return true

  if (requiredRole === 'system_team') {
    return checkSystemTeamRole(userId)
  }

  return false
}

// 組織ロールのチェック
export async function checkOrganizationRole(userId: string, organizationId: string, requiredRole: OrganizationRoleType): Promise<boolean> {
  // システムチームの場合は常にアクセスを許可
  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (user?.systemRole === 'system_team') {
    return true;
  }

  const membership = await prisma.organizationMembership.findFirst({
    where: {
      user: { clerkId: userId },
      organizationId,
      role: requiredRole
    }
  })
  return !!membership
}

// 認証済みユーザーの取得
export const getAuthenticatedUser = async (): Promise<AuthenticatedUser | null> => {
  try {
    const { userId } = auth()
    if (!userId) return null

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

    if (!user) return null

    return {
      id: user.id,
      clerkId: user.clerkId,
      systemRole: user.systemRole,
      organizationMemberships: user.memberships.map((m: { organizationId: string; role: OrganizationRoleType }) => ({
        organizationId: m.organizationId,
        role: m.role
      }))
    }
  } catch (error) {
    console.error('Error getting authenticated user:', error)
    return null
  }
}

// 認証エラーレスポンスの作成
export const createAuthErrorResponse = (error: typeof AuthError[keyof typeof AuthError]) => {
  return NextResponse.json(
    { error: error.message },
    { status: error.code }
  )
}

// 認証ミドルウェア
export const withAuth = async (handler: () => Promise<Response>) => {
  const { userId } = auth()
  if (!userId) {
    return createAuthErrorResponse(AuthError.UNAUTHORIZED)
  }
  return handler()
}

// システムチーム認証ミドルウェア
export const withSystemTeamAuth = async (handler: () => Promise<Response>) => {
  const result = await systemTeamAuth()
  if (!result.success) {
    return createAuthErrorResponse(result.error!)
  }
  return handler()
}

// 組織管理者認証ミドルウェア
export const withOrganizationAdminAuth = async (organizationId: string, handler: () => Promise<Response>) => {
  const result = await organizationAdminAuth(organizationId)
  if (!result.success) {
    return createAuthErrorResponse(result.error!)
  }
  return handler()
} 