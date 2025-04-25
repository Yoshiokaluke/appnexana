import { auth as clerkAuth } from "@clerk/nextjs/server";
import { prisma } from "./prisma";
import type { User } from "../lib/generated/prisma";

type SystemRole = User["systemRole"];
type OrganizationRole = "admin" | "member";

export async function isSystemTeam(): Promise<boolean> {
  const session = await clerkAuth();
  const { userId } = session;
  if (!userId) return false;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { systemRole: true }
  }) as { systemRole: SystemRole | null };

  return user?.systemRole === "system_team";
}

export async function isOrganizationAdmin(organizationId: string): Promise<boolean> {
  const session = await clerkAuth();
  const { userId } = session;
  if (!userId) return false;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      memberships: {
        where: { organizationId }
      }
    }
  }) as { memberships: { role: OrganizationRole }[] } | null;

  return user?.memberships.some(m => m.role === "admin") ?? false;
}

export async function hasOrganizationAccess(organizationId: string): Promise<boolean> {
  const session = await clerkAuth();
  const { userId } = session;
  if (!userId) return false;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      memberships: {
        where: { organizationId }
      }
    }
  });

  return (user?.memberships?.length ?? 0) > 0;
}

export async function getUserOrganizations() {
  const session = await clerkAuth();
  const { userId } = session;
  if (!userId) return [];

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      memberships: {
        include: {
          organization: true
        }
      }
    }
  });

  return user?.memberships?.map(m => ({
    ...m.organization,
    role: m.role
  })) ?? [];
} 