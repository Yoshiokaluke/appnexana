import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export type SystemRole = 'system_team' | null
export type OrganizationRole = 'admin' | 'member'

interface UserRoles {
  systemRole: SystemRole
  organizationRoles: Map<string, OrganizationRole> // organizationId -> role
}

interface Membership {
  organizationId: string;
  role: OrganizationRole;
}

// システムロールの取得
export async function getSystemRole(userId: string): Promise<SystemRole> {
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { systemRole: true }
  })
  return user?.systemRole ?? null
}

// 組織ロールの取得
export async function getOrganizationRole(userId: string, organizationId: string): Promise<OrganizationRole | null> {
  const membership = await prisma.organizationMembership.findFirst({
    where: {
      userId: userId,
      organizationId: organizationId
    },
    select: { role: true }
  })
  return membership?.role ?? null
}

// ユーザーの全ロール情報を取得
export async function getUserRoles(userId: string): Promise<UserRoles> {
  const [user, memberships] = await Promise.all([
    prisma.user.findUnique({
      where: { clerkId: userId },
      select: { systemRole: true }
    }),
    prisma.organizationMembership.findMany({
      where: { userId: userId },
      select: { organizationId: true, role: true }
    })
  ]) as [{ systemRole: SystemRole } | null, Membership[]]

  const organizationRoles = new Map<string, OrganizationRole>(
    memberships.map(m => [m.organizationId, m.role])
  )

  return {
    systemRole: user?.systemRole ?? null,
    organizationRoles
  }
}

// システムチームメンバーかどうかをチェック
export async function isSystemTeamMember(userId: string): Promise<boolean> {
  const systemRole = await getSystemRole(userId)
  return systemRole === 'system_team'
}

// 組織の管理者かどうかをチェック
export async function isOrganizationAdmin(userId: string, organizationId: string): Promise<boolean> {
  const role = await getOrganizationRole(userId, organizationId)
  return role === 'admin'
}

// 組織のメンバーかどうかをチェック
export async function isOrganizationMember(userId: string, organizationId: string): Promise<boolean> {
  const role = await getOrganizationRole(userId, organizationId)
  return role === 'member' || role === 'admin'
}

// 認証済みユーザーのIDを取得（未認証の場合はエラー）
export async function requireAuth() {
  const { userId } = await auth()
  if (!userId) {
    throw new Error('認証が必要です')
  }
  return userId
} 