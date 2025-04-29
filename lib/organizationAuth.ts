import { currentUser, auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { isSystemTeamMember } from "./systemTeamAuth";

export async function hasOrganizationAccess(organizationId: string) {
  try {
    const user = await currentUser();
    if (!user) return false;

    // システムチームメンバーの確認
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
      select: { systemRole: true }
    });

    if (dbUser?.systemRole === 'system_team') return true;

    // 組織メンバーシップの確認
    const { orgId } = await auth();
    return orgId === organizationId;

  } catch (error) {
    console.error('Organization access check error:', error);
    return false;
  }
}

export async function hasOrganizationAdminAccess(organizationId: string) {
  try {
    const user = await currentUser();
    if (!user) return false;

    // システムチームメンバーの確認
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
      select: { systemRole: true }
    });

    if (dbUser?.systemRole === 'system_team') return true;

    // 組織での管理者権限の確認
    const { orgId, orgRole } = await auth();
    return orgId === organizationId && orgRole === 'admin';

  } catch (error) {
    console.error('Organization admin access check error:', error);
    return false;
  }
}

export async function requireOrganizationAccess(organizationId: string) {
  const hasAccess = await hasOrganizationAccess(organizationId);
  
  if (!hasAccess) {
    throw new Error('権限エラー: この組織へのアクセス権限がありません');
  }
  
  return true;
}

export async function requireOrganizationAdminAccess(organizationId: string) {
  const hasAccess = await hasOrganizationAdminAccess(organizationId);
  
  if (!hasAccess) {
    throw new Error('権限エラー: この操作には組織の管理者権限が必要です');
  }
  
  return true;
} 