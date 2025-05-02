import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { checkOrganizationRole } from "@/lib/auth/roles";

export default async function MemberLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { organizationId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // メンバーまたは管理者権限を確認
  const hasAccess = await checkOrganizationRole(userId, params.organizationId, "member");
  if (!hasAccess) {
    redirect("/organization-list");
  }

  return <>{children}</>;
} 