import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function isSystemTeamMember() {
  const user = await currentUser();
  if (!user) return false;

  const dbUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id
    },
    select: {
      systemRole: true
    }
  });

  return dbUser?.systemRole === 'system_team';
}

export async function requireSystemTeamMember() {
  const isTeamMember = await isSystemTeamMember();
  
  if (!isTeamMember) {
    throw new Error("権限エラー: システムチームメンバーのみアクセス可能です");
  }
  
  return true;
} 