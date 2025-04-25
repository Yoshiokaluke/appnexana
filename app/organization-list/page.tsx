import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { OrganizationCard } from '@/components/features/organization/OrganizationCard'

export default async function OrganizationListPage() {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
  }

  // ユーザーの所属組織を取得
  const memberships = await prisma.organizationMembership.findMany({
    where: { userId },
    include: {
      organization: {
        select: {
          id: true,
          name: true
        }
      }
    },
    orderBy: {
      organization: {
        name: 'asc'
      }
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ワークスペースを選択
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            アクセスしたい組織を選択してください
          </p>
        </div>

        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {memberships.map((membership) => (
            <OrganizationCard
              key={membership.organization.id}
              organization={membership.organization}
              role={membership.role}
            />
          ))}
        </div>

        {memberships.length === 0 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">所属組織がありません</h3>
            <p className="mt-2 text-base text-gray-500">
              システム管理者に連絡して、組織への招待を依頼してください。
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 