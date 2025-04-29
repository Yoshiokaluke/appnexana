'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

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
      const response = await fetch('/api/organizations');
      const data = await response.json();
      setOrganizations(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching organizations:', error);
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
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">組織一覧</h1>
        <Link
          href="/system-team/organizations/create"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          新規作成
        </Link>
      </div>
      <div className="grid gap-4">
        {organizations.map((org) => (
          <div key={org.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{org.name}</h2>
            <p>{org.address}</p>
            <p>{org.managerName}</p>
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