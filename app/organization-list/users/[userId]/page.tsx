import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getUserRoles } from '@/lib/auth/roles'

export default async function UserProfilePage({
  params,
}: {
  params: { userId: string }
}) {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
  }

  const [user, userRoles] = await Promise.all([
    currentUser(),
    getUserRoles(userId),
  ])

  if (!user) {
    throw new Error('ユーザー情報が見つかりません')
  }

  // システムロールと組織ロールを配列に変換
  const roles: string[] = [
    ...(userRoles.systemRole ? [userRoles.systemRole] : []),
    ...Array.from(userRoles.organizationRoles.values())
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 基本情報 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">基本情報</h2>
            <div>
              <p className="text-sm font-medium text-gray-500">名前</p>
              <p className="mt-1 text-gray-900">{user.firstName} {user.lastName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">メールアドレス</p>
              <p className="mt-1 text-gray-900">{user.emailAddresses[0]?.emailAddress}</p>
            </div>
          </div>

          {/* 権限情報 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">権限情報</h2>
            <div className="space-y-2">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-2"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 