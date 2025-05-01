import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/profile/ProfileForm";

export default async function ProfileSettingsPage({
  params,
}: {
  params: { clerkId: string };
}) {
  const { userId } = auth();

  if (!userId || userId !== params.clerkId) {
    redirect("/");
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">プロフィール設定</h1>
        <ProfileForm clerkId={params.clerkId} />
      </div>
    </div>
  );
} 