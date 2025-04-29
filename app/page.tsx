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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="space-y-6">
          <h1 className="text-center text-4xl font-extrabold text-gray-900 tracking-tight">
            AppNexana
          </h1>
          <h2 className="text-center text-2xl font-semibold text-gray-700">
            ようこそ
          </h2>
          <p className="text-center text-gray-500">
            サインインして始めましょう
          </p>
        </div>
      </div>
    </div>
  );
}
