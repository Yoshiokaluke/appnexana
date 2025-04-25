import { auth } from '@clerk/nextjs/server'
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { isOrganizationAdmin } from '@/lib/auth/roles'

interface AdminProtectedProps {
  children: ReactNode
  organizationId: string
}

export const AdminProtected = async ({ children, organizationId }: AdminProtectedProps) => {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  // 組織の管理者権限チェック
  const isAdmin = await isOrganizationAdmin(userId, organizationId)
  if (!isAdmin) {
    redirect(`/organization/${organizationId}`)
  }

  return <>{children}</>
} 