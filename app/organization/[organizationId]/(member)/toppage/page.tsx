'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

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

export default function MemberTopPage() {
  const params = useParams();
  const { user } = useUser();
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
      <h2 className="text-2xl font-semibold mb-6">組織ダッシュボード</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* プロフィールカード */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">マイプロフィール</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">名前</p>
              <p className="font-medium">{user?.firstName} {user?.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">メールアドレス</p>
              <p className="font-medium">{user?.emailAddresses[0].emailAddress}</p>
            </div>
            <Link 
              href={`/organization/${organizationId}/${user?.id}/OrganizationProfile`}
              className="inline-block text-blue-600 hover:text-blue-800"
            >
              プロフィールを編集 →
            </Link>
          </div>
        </div>

        {/* QRコードカード */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">マイQRコード</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              あなた専用のQRコードを表示・管理できます。
            </p>
            <Link 
              href={`/organization/${organizationId}/${user?.id}/My-QR`}
              className="inline-block text-blue-600 hover:text-blue-800"
            >
              QRコードを表示 →
            </Link>
          </div>
        </div>

        {/* 組織情報カード */}
        <div className="bg-white shadow-sm rounded-lg p-6 md:col-span-2">
          <h3 className="text-lg font-medium mb-4">組織情報</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-gray-500">組織名</dt>
              <dd className="font-medium">{organization.name}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">担当者</dt>
              <dd className="font-medium">{organization.managerName || '未設定'}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">メンバー数</dt>
              <dd className="font-medium">{organization._count.memberships}人</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">スキャナー数</dt>
              <dd className="font-medium">{organization._count.qrScanners}台</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 