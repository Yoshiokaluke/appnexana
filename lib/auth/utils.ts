import { auth } from '@clerk/nextjs/server'
import { SystemRole, OrganizationRole } from './roles'

export type UserRole = SystemRole | OrganizationRole

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