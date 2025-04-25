'use client'

import { useEffect } from 'react'

export default function UserProfileError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">
        ユーザー情報の取得中にエラーが発生しました
      </h2>
      <p className="text-gray-600">
        申し訳ありませんが、ユーザー情報の取得中に問題が発生しました。
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        再試行
      </button>
    </div>
  )
} 