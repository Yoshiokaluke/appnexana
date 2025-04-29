'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Input } from '@/app/components/ui/input';
import { toast } from 'sonner';

type Role = 'admin' | 'member';

interface InvitePageContentProps {
  organizationId: string;
}

export function InvitePageContent({ organizationId }: InvitePageContentProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role>('member');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/organization/${organizationId}/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, role }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        if (response.status === 401) {
          toast.error('権限エラー: この操作を実行する権限がありません');
          return;
        }
        throw new Error(errorText || '招待の送信に失敗しました');
      }

      const result = await response.json();
      
      if (result.invitation && result.emailResponse) {
        toast.success('招待メールを送信しました');
        router.push(`/organization/${organizationId}/members`);
      } else {
        throw new Error('招待の処理に失敗しました');
      }
    } catch (error) {
      console.error('Invitation error:', error);
      toast.error(error instanceof Error ? error.message : '予期せぬエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">メンバーを招待</h1>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="member@example.com"
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">ロール</Label>
              <Select defaultValue={role} onValueChange={(value) => setRole(value as Role)}>
                <SelectTrigger className="w-full">
                  <SelectValue defaultText="ロールを選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">管理者</SelectItem>
                  <SelectItem value="member">メンバー</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-8" />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? '送信中...' : '招待を送信'}
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
}

export default InvitePageContent; 