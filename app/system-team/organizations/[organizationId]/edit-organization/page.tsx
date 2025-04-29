'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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

export default function EditOrganizationPage() {
  const router = useRouter();
  const params = useParams();
  const organizationId = params.organizationId as string;

  const [organization, setOrganization] = useState<Organization | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    managerName: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchOrganization();
  }, [organizationId]);

  // 組織詳細の取得
  const fetchOrganization = async () => {
    try {
      const response = await fetch(`/api/system-team/organizations/${organizationId}/edit-organization`);
      if (!response.ok) throw new Error('組織の取得に失敗しました');
      const data = await response.json();
      setOrganization(data);
      setFormData({
        name: data.name,
        address: data.address || '',
        managerName: data.managerName || ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('組織の取得に失敗しました');
    }
  };

  // 組織の更新
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/system-team/organizations/${organizationId}/edit-organization`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('組織の更新に失敗しました');
      router.push('/system-team/organizations');
      router.refresh();
    } catch (error) {
      console.error('Error:', error);
      alert('組織の更新に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // 組織の削除
  const handleDelete = async () => {
    if (!confirm('この組織を削除してもよろしいですか？\n関連するすべてのデータ（メンバー、スキャナーなど）も削除されます。')) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/system-team/organizations/${organizationId}/edit-organization`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('組織の削除に失敗しました');
      router.push('/system-team/organizations');
      router.refresh();
    } catch (error) {
      console.error('Error:', error);
      alert('組織の削除に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  if (!organization) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">組織の編集</h2>
        <button
          onClick={() => router.push('/system-team/organizations')}
          className="text-gray-600 hover:text-gray-800"
        >
          戻る
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              組織名 *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              住所
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              担当者名
            </label>
            <input
              type="text"
              value={formData.managerName}
              onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={handleDelete}
              disabled={isLoading}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-50"
            >
              削除
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              保存
            </button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium">組織の情報</h3>
          <dl className="mt-4 space-y-2">
            <div className="flex">
              <dt className="w-32 text-gray-500">メンバー数:</dt>
              <dd>{organization._count.memberships}人</dd>
            </div>
            <div className="flex">
              <dt className="w-32 text-gray-500">スキャナー数:</dt>
              <dd>{organization._count.qrScanners}台</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 