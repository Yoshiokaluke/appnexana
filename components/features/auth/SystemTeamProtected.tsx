import { auth } from '@clerk/nextjs/server'
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { checkSystemTeamMember } from '@/lib/auth/roles'

interface SystemTeamProtectedProps {
  children: ReactNode
}

export const SystemTeamProtected = async ({ children }: SystemTeamProtectedProps) => {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  // システムチームメンバーチェック
  const isSystemTeam = await checkSystemTeamMember(userId)
  if (!isSystemTeam) {
    redirect('/')
  }

  return <>{children}</>
} 