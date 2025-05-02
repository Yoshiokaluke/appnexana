'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

interface EditDepartmentDialogProps {
  department: {
    id: string;
    name: string;
    order: number;
  };
  organizationId: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function EditDepartmentDialog({
  department,
  organizationId,
  isOpen,
  onClose,
  onSuccess,
}: EditDepartmentDialogProps) {
  const [name, setName] = useState(department.name);
  const [order, setOrder] = useState(department.order);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name) {
      toast.error('部署名を入力してください');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/organization/${organizationId}/departments/${department.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, order }),
      });

      if (!response.ok) throw new Error('部署の更新に失敗しました');

      toast.success('部署を更新しました');
      onSuccess();
      onClose();
    } catch (error) {
      console.error('部署更新エラー:', error);
      toast.error('部署の更新に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>部署の編集</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              部署名
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="部署名を入力"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="order" className="text-sm font-medium">
              表示順
            </label>
            <Input
              id="order"
              type="number"
              value={order}
              onChange={(e) => setOrder(parseInt(e.target.value))}
              placeholder="表示順を入力"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            キャンセル
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            保存
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 