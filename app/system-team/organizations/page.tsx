'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';

type Organization = {
  id: string;
  name: string;
  address: string | null;
  managerName: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type QrScanner = {
  id: string;
  name: string;
  description: string | null;
  location: string;
  scannerId: string;
  password: string;
  status: string;
  lastActive: Date | null;
  organizationId: string;
};

export default function OrganizationsPage() {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [qrScanners, setQrScanners] = useState<Record<string, QrScanner[]>>({});
  const [editingOrg, setEditingOrg] = useState<{ id: string; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isQrScannerModalOpen, setIsQrScannerModalOpen] = useState(false);
  const [isEditQrScannerModalOpen, setIsEditQrScannerModalOpen] = useState(false);
  const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
  const [editingQrScanner, setEditingQrScanner] = useState<QrScanner | null>(null);
  const [newQrScanner, setNewQrScanner] = useState({
    name: '',
    description: '',
    location: '',
  });
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    fetchOrganizations();
  }, []);

  // 組織一覧の取得
  const fetchOrganizations = async () => {
    try {
      const response = await fetch('/api/organizations');
      const data = await response.json();
      setOrganizations(Array.isArray(data) ? data : []);
      
      // 組織一覧取得後に各組織のQRスキャナーを取得
      data.forEach((org: Organization) => {
        fetchQrScanners(org.id);
      });
    } catch (error) {
      console.error('Error fetching organizations:', error);
    }
  };

  // QRスキャナー一覧の取得
  const fetchQrScanners = async (organizationId: string) => {
    try {
      const response = await fetch(`/api/system-team/qr-scanners?organizationId=${organizationId}`);
      const data = await response.json();
      setQrScanners(prev => ({
        ...prev,
        [organizationId]: data,
      }));
    } catch (error) {
      console.error('Error fetching QR scanners:', error);
    }
  };

  // QRスキャナーの作成
  const handleCreateQrScanner = async () => {
    if (!selectedOrgId) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/system-team/qr-scanners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organizationId: selectedOrgId,
          ...newQrScanner,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('QRスキャナー作成エラー詳細:', errorData);
        throw new Error(errorData.error || 'QRスキャナーの作成に失敗しました');
      }

      await fetchQrScanners(selectedOrgId);
      setIsQrScannerModalOpen(false);
      setNewQrScanner({
        name: '',
        description: '',
        location: '',
      });
    } catch (error) {
      console.error('Error details:', error);
      alert(error instanceof Error ? error.message : 'QRスキャナーの作成に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // QRスキャナーの削除
  const handleDeleteQrScanner = async (id: string, organizationId: string) => {
    if (!confirm('このQRスキャナーを削除してもよろしいですか？')) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/system-team/qr-scanners?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('QRスキャナーの削除に失敗しました');

      await fetchQrScanners(organizationId);
    } catch (error) {
      console.error('Error:', error);
      alert('QRスキャナーの削除に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // QRスキャナーのステータス更新
  const handleUpdateQrScannerStatus = async (id: string, organizationId: string, currentStatus: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/system-team/qr-scanners', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          status: currentStatus === 'active' ? 'inactive' : 'active',
        }),
      });

      if (!response.ok) throw new Error('QRスキャナーの更新に失敗しました');

      await fetchQrScanners(organizationId);
    } catch (error) {
      console.error('Error:', error);
      alert('QRスキャナーの更新に失敗しました');
    } finally {
      setIsLoading(false);
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

  // QRスキャナーの編集
  const handleEditQrScanner = async () => {
    if (!editingQrScanner) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/system-team/qr-scanners', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editingQrScanner.id,
          name: editingQrScanner.name,
          description: editingQrScanner.description,
          location: editingQrScanner.location,
        }),
      });

      if (!response.ok) throw new Error('QRスキャナーの更新に失敗しました');

      await fetchQrScanners(editingQrScanner.organizationId);
      setIsEditQrScannerModalOpen(false);
      setEditingQrScanner(null);
    } catch (error) {
      console.error('Error:', error);
      alert('QRスキャナーの更新に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // パスワードの変更
  const handleUpdatePassword = async () => {
    if (!editingQrScanner) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/system-team/qr-scanners', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editingQrScanner.id,
          password: newPassword,
        }),
      });

      if (!response.ok) throw new Error('パスワードの変更に失敗しました');

      await fetchQrScanners(editingQrScanner.organizationId);
      setIsPasswordModalOpen(false);
      setNewPassword('');
      setEditingQrScanner(null);
    } catch (error) {
      console.error('Error:', error);
      alert('パスワードの変更に失敗しました');
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
            <div className="flex justify-between items-start mb-4">
              <div>
                <Link href={`/organization/${org.id}`} className="text-xl font-semibold hover:text-blue-600">
                  {org.name}
                </Link>
                <p>{org.address}</p>
                <p>{org.managerName}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedOrgId(org.id);
                  setIsQrScannerModalOpen(true);
                  if (!qrScanners[org.id]) {
                    fetchQrScanners(org.id);
                  }
                }}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                QRスキャナーを追加
              </button>
            </div>
            
            {/* QRスキャナー一覧 */}
            {qrScanners[org.id] && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">QRスキャナー一覧</h3>
                <div className="grid gap-2">
                  {qrScanners[org.id].map((scanner) => (
                    <div key={scanner.id} className="border p-2 rounded">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{scanner.name}</p>
                          <p className="text-sm text-gray-600">{scanner.location}</p>
                          <p className="text-sm text-gray-600">ID: {scanner.scannerId}</p>
                          <p className="text-sm text-gray-600">パスワード: {scanner.password}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setEditingQrScanner(scanner);
                              setIsEditQrScannerModalOpen(true);
                            }}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => {
                              setEditingQrScanner(scanner);
                              setIsPasswordModalOpen(true);
                            }}
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                          >
                            パスワード変更
                          </button>
                          <button
                            onClick={() => handleUpdateQrScannerStatus(scanner.id, org.id, scanner.status)}
                            className={`px-3 py-1 rounded ${
                              scanner.status === 'active'
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-gray-500 hover:bg-gray-600'
                            } text-white`}
                          >
                            {scanner.status === 'active' ? '有効' : '無効'}
                          </button>
                          <button
                            onClick={() => handleDeleteQrScanner(scanner.id, org.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            削除
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* QRスキャナー作成モーダル */}
      <Dialog
        open={isQrScannerModalOpen}
        onClose={() => setIsQrScannerModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-4">
              QRスキャナーの追加
            </Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  名前
                </label>
                <input
                  type="text"
                  value={newQrScanner.name}
                  onChange={(e) =>
                    setNewQrScanner({ ...newQrScanner, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  説明
                </label>
                <input
                  type="text"
                  value={newQrScanner.description}
                  onChange={(e) =>
                    setNewQrScanner({ ...newQrScanner, description: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  設置場所
                </label>
                <input
                  type="text"
                  value={newQrScanner.location}
                  onChange={(e) =>
                    setNewQrScanner({ ...newQrScanner, location: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsQrScannerModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                キャンセル
              </button>
              <button
                onClick={handleCreateQrScanner}
                disabled={isLoading || !newQrScanner.name || !newQrScanner.location}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
              >
                {isLoading ? '作成中...' : '作成'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* QRスキャナー編集モーダル */}
      <Dialog
        open={isEditQrScannerModalOpen}
        onClose={() => setIsEditQrScannerModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-4">
              QRスキャナーの編集
            </Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  名前
                </label>
                <input
                  type="text"
                  value={editingQrScanner?.name || ''}
                  onChange={(e) =>
                    setEditingQrScanner(prev => prev ? { ...prev, name: e.target.value } : null)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  説明
                </label>
                <input
                  type="text"
                  value={editingQrScanner?.description || ''}
                  onChange={(e) =>
                    setEditingQrScanner(prev => prev ? { ...prev, description: e.target.value } : null)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  設置場所
                </label>
                <input
                  type="text"
                  value={editingQrScanner?.location || ''}
                  onChange={(e) =>
                    setEditingQrScanner(prev => prev ? { ...prev, location: e.target.value } : null)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsEditQrScannerModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                キャンセル
              </button>
              <button
                onClick={handleEditQrScanner}
                disabled={isLoading || !editingQrScanner?.name || !editingQrScanner?.location}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
              >
                {isLoading ? '更新中...' : '更新'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* パスワード変更モーダル */}
      <Dialog
        open={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-4">
              パスワードの変更
            </Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  新しいパスワード
                </label>
                <input
                  type="text"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsPasswordModalOpen(false);
                  setNewPassword('');
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                キャンセル
              </button>
              <button
                onClick={handleUpdatePassword}
                disabled={isLoading || !newPassword}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
              >
                {isLoading ? '更新中...' : '更新'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
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