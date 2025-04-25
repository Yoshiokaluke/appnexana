import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  
  // ログインしている場合は組織選択画面にリダイレクト
  if (userId) {
    redirect("/organization-list");
  }

  // 未ログインの場合はウェルカムページを表示
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            AppNexana
          </h1>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            ようこそ
          </h2>
        </div>
        <div>
          <p>Your Clerk User ID: {userId}</p>
        </div>
      </div>
    </div>
  );
}
