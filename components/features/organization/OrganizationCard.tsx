import { FC } from 'react'
import Link from 'next/link'

type OrganizationRole = 'admin' | 'member'

interface Organization {
  id: string
  name: string
  iconUrl?: string | null
  description?: string | null
}

interface OrganizationCardProps {
  organization: Organization
  role: OrganizationRole
}

export const OrganizationCard: FC<OrganizationCardProps> = ({ organization, role }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:transform hover:-translate-y-1">
      <Link href={`/organization/${organization.id}`} className="flex-1">
        <div className="flex-shrink-0 h-48 relative">
          {organization.iconUrl ? (
            <img
              className="h-full w-full object-cover"
              src={organization.iconUrl}
              alt={organization.name}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">
                {organization.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span className={`
              inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium
              ${role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}
            `}>
              {role === 'admin' ? '管理者' : 'メンバー'}
            </span>
          </div>
        </div>
        <div className="flex-1 bg-white p-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {organization.name}
            </h3>
            {organization.description && (
              <p className="mt-3 text-base text-gray-500">
                {organization.description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
} 