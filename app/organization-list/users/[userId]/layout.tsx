import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { SystemTeamProtected } from '@/components/features/auth/SystemTeamProtected'

interface UserLayoutProps {
  children: React.ReactNode
  params: {
    userId: string
  }
}

export default async function UserLayout({ children, params }: UserLayoutProps) {
  const { userId: currentUserId } = await auth()

  if (!currentUserId) {
    redirect('/sign-in')
  }

  // システムチームメンバーまたは自分自身のプロフィールのみアクセス可能
  if (currentUserId !== params.userId) {
    return (
      <SystemTeamProtected>
        {children}
      </SystemTeamProtected>
    )
  }

  return <>{children}</>
} 