'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { EditDepartmentDialog } from './edit-dialog';
import { DraggableList } from './draggable-list';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface Department {
  id: string;
  name: string;
  order: number;
}

export default function OrganizationDepartmentsPage() {
  const params = useParams();
  const organizationId = Array.isArray(params.organizationId) 
    ? params.organizationId[0] 
    : params.organizationId;

  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDepartment, setNewDepartment] = useState({ name: '', order: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    if (organizationId) {
      fetchDepartments();
    }
  }, [organizationId]);

  // 部署一覧の取得
  const fetchDepartments = useCallback(async () => {
    try {
      console.log('部署一覧取得開始 - 組織ID:', organizationId);
      const response = await fetch(`/api/organization/${organizationId}/departments`);
      console.log('APIレスポンス:', response.status, response.statusText);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('APIエラー:', errorData);
        throw new Error('部署一覧の取得に失敗しました');
      }
      
      const data = await response.json();
      console.log('取得した部署一覧:', JSON.stringify(data, null, 2));
      setDepartments(data);
    } catch (error) {
      console.error('部署一覧取得エラー:', error);
      toast.error('部署一覧の取得に失敗しました');
    }
  }, [organizationId]);

  // 部署の追加
  const handleAddDepartment = async () => {
    if (!newDepartment.name) {
      toast.error('部署名を入力してください');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/organization/${organizationId}/departments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDepartment),
      });

      if (!response.ok) throw new Error('部署の追加に失敗しました');

      toast.success('部署を追加しました');
      setNewDepartment({ name: '', order: 0 });
      fetchDepartments();
    } catch (error) {
      console.error('部署追加エラー:', error);
      toast.error('部署の追加に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // 部署の削除
  const handleDeleteDepartment = async (departmentId: string) => {
    if (!confirm('この部署を削除してもよろしいですか？')) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/organization/${organizationId}/departments/${departmentId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('部署の削除に失敗しました');

      toast.success('部署を削除しました');
      fetchDepartments();
    } catch (error) {
      console.error('部署削除エラー:', error);
      toast.error('部署の削除に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // 表示順の更新
  const handleUpdateOrder = async (updatedDepartments: Department[]) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/organization/${organizationId}/departments/bulk-update`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedDepartments),
      });

      if (!response.ok) throw new Error('表示順の更新に失敗しました');

      toast.success('表示順を更新しました');
      setDepartments(updatedDepartments);
    } catch (error) {
      console.error('表示順更新エラー:', error);
      toast.error('表示順の更新に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">部署管理</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>部署を追加</Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : departments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">部署が登録されていません</p>
        </div>
      ) : (
        <div className="space-y-4">
          {departments.map((department) => (
            <div
              key={department.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                  {department.order + 1}
                </div>
                <span className="font-medium">{department.name}</span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditingDepartment(department);
                    setIsEditDialogOpen(true);
                  }}
                >
                  編集
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteDepartment(department.id)}
                >
                  削除
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 追加ダイアログ */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>部署を追加</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddDepartment}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">部署名</Label>
                <Input
                  id="name"
                  value={newDepartment.name}
                  onChange={(e) =>
                    setNewDepartment({ ...newDepartment, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  キャンセル
                </Button>
                <Button type="submit">追加</Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* 編集ダイアログ */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>部署を編集</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddDepartment}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-name">部署名</Label>
                <Input
                  id="edit-name"
                  value={editingDepartment?.name || ''}
                  onChange={(e) =>
                    setEditingDepartment({
                      ...editingDepartment!,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  キャンセル
                </Button>
                <Button type="submit">保存</Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 