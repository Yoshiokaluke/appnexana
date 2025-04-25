import { prisma } from "@/lib/prisma";

export default async function OrganizationsPage() {
  const organizations = await prisma.organization.findMany({
    include: {
      _count: {
        select: {
          memberships: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">組織一覧</h2>
        <a
          href="/system-team/organizations/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          新規組織作成
        </a>
      </div>

      <div className="bg-white shadow rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                組織名
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                メンバー数
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                作成日
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {organizations.map((org) => (
              <tr key={org.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{org.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{org._count.memberships}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {new Date(org.createdAt).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a
                    href={`/system-team/organizations/${org.id}/edit`}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    編集
                  </a>
                  <a
                    href={`/system-team/organizations/${org.id}/scanners`}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    スキャナー管理
                  </a>
                  <a
                    href={`/system-team/organizations/${org.id}/members`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    メンバー管理
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 