import { redirect } from "next/navigation";
import { isSystemTeam } from "@/app/lib/auth";

export default async function SystemTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = await isSystemTeam();
  
  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">システム管理</h1>
      <div className="flex gap-4 mb-6">
        <a href="/system-team/organizations" className="text-blue-600 hover:underline">
          組織管理
        </a>
        <a href="/system-team/roles" className="text-blue-600 hover:underline">
          ロール管理
        </a>
      </div>
      {children}
    </div>
  );
} 