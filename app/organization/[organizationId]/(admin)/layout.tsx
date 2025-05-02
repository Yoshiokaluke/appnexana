import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { checkOrganizationAdmin } from "@/lib/auth/roles";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  const organizationId = window.location.pathname.split("/")[2];

  if (!userId) {
    redirect("/sign-in");
  }

  // 管理者権限またはシステムチーム権限を確認
  const isAdmin = await checkOrganizationAdmin(userId, organizationId);
  if (!isAdmin) {
    redirect(`/organization/${organizationId}/member/toppage`);
  }

  return <>{children}</>;
} 