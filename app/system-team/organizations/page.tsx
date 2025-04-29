'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { prisma } from '@/lib/prisma';

type Organization = {
  id: string;
  name: string;
  address: string | null;
  managerName: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export default function OrganizationsPage() {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [editingOrg, setEditingOrg] = useState<{ id: string; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  // 組織一覧の取得
  const fetchOrganizations = async () => {
    try {
      const response = await fetch('/api/system-team/organizations');
      if (!response.ok) throw new Error('組織の取得に失敗しました');
      const data = await response.json();
      setOrganizations(data);
    } catch (error) {
      console.error('Error:', error);
      alert('組織の取得に失敗しました');
    }
  };

  // 組織の削除
  const handleDelete = async (id: string) => {
    if (!confirm('この組織を削除してもよろしいですか？')) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/system-team/organizations?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('組織の削除に失敗しました');
      
      await fetchOrganizations();
      router.refresh();
    } catch (error) {
      console.error('Error:', error);
      alert('組織の削除に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // 組織名の変更
  const handleUpdate = async (id: string, newName: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/system-team/organizations', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name: newName }),
      });

      if (!response.ok) throw new Error('組織名の変更に失敗しました');
      
      await fetchOrganizations();
      setEditingOrg(null);
      router.refresh();
    } catch (error) {
      console.error('Error:', error);
      alert('組織名の変更に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">組織一覧</h2>
        <button
          onClick={() => router.push('/system-team/organizations/create')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          新規作成
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg divide-y">
        {organizations.map((org) => (
          <div key={org.id} className="p-4 flex items-center justify-between">
            {editingOrg?.id === org.id ? (
              <div className="flex gap-2 items-center flex-1">
                <input
                  type="text"
                  value={editingOrg?.name ?? ''}
                  onChange={(e) => {
                    if (editingOrg) {
                      setEditingOrg({ ...editingOrg, name: e.target.value });
                    }
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                />
                <button
                  onClick={() => {
                    if (editingOrg) {
                      handleUpdate(org.id, editingOrg.name);
                    }
                  }}
                  disabled={isLoading}
                  className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 disabled:opacity-50"
                >
                  保存
                </button>
                <button
                  onClick={() => setEditingOrg(null)}
                  className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600"
                >
                  キャンセル
                </button>
              </div>
            ) : (
              <>
                <span className="text-lg">{org.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingOrg({ id: org.id, name: org.name })}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    編集
                  </button>
                  <button
                    onClick={() => handleDelete(org.id)}
                    disabled={isLoading}
                    className="text-red-600 hover:text-red-800 disabled:opacity-50"
                  >
                    削除
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 

export const config = {
  matcher: [
    "/system-team/:path*",
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};