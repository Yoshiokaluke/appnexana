import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export type AuthenticatedUser = {
  id: string;
  clerkId: string;
  roles: string[];
  systemRole: 'system_team' | null;
};

// システムチーム権限チェック
export const isSystemTeam = async (): Promise<boolean> => {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return false;

  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUserId },
    select: { systemRole: true }
  });

  return user?.systemRole === 'system_team';
};

// 組織内での権限チェック
export const checkOrganizationRole = async (
  clerkUserId: string,
  organizationId: string,
  requiredRole: 'admin' | 'member'
): Promise<boolean> => {
  const membership = await prisma.organizationMembership.findFirst({
    where: {
      user: { clerkId: clerkUserId },
      organizationId,
    },
    select: { role: true }
  });

  if (!membership) return false;
  if (requiredRole === 'member') return true;
  return membership.role === 'admin';
};

// ユーザー情報の取得
export const getAuthenticatedUser = async (clerkUserId: string): Promise<AuthenticatedUser | null> => {
  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUserId },
    select: {
      id: true,
      clerkId: true,
      roles: true,
      systemRole: true
    }
  });

  if (!user) return null;

  return {
    id: user.id,
    clerkId: user.clerkId,
    roles: user.roles,
    systemRole: user.systemRole
  };
}; 