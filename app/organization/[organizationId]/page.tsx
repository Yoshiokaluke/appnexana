'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

type Organization = {
  id: string;
  name: string;
  address: string | null;
  managerName: string | null;
  _count: {
    memberships: number;
    qrScanners: number;
  };
};

export default function OrganizationPage() {
  const params = useParams();
  const organizationId = params.organizationId as string;
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrganization();
  }, [organizationId]);

  const fetchOrganization = async () => {
    try {
      const response = await fetch(`/api/organization/${organizationId}`);
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const data = await response.json();
      setOrganization(data);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('組織情報の取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  if (!organization) {
    return <div className="p-6">組織が見つかりません</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">組織の詳細</h2>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <dl className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-gray-500">組織名</dt>
            <dd className="mt-1 text-lg">{organization.name}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">住所</dt>
            <dd className="mt-1">{organization.address || '未設定'}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">担当者名</dt>
            <dd className="mt-1">{organization.managerName || '未設定'}</dd>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <dt className="text-sm font-medium text-gray-500">メンバー数</dt>
            <dd className="mt-1">{organization._count.memberships}人</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">スキャナー数</dt>
            <dd className="mt-1">{organization._count.qrScanners}台</dd>
          </div>
        </dl>

        <div className="mt-6 flex gap-4">
          <a
            href={`/organization/${organizationId}/members`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            メンバー管理
          </a>
          <a
            href={`/organization/${organizationId}/scanners`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            スキャナー管理
          </a>
        </div>
      </div>
    </div>
  );
} 