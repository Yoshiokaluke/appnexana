'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast as sonnerToast } from 'sonner';

type Member = {
  id: string;
  role: 'admin' | 'member';
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
  };
};

export default function MemberDetailPage({
  params,
}: {
  params: { organizationId: string; memberId: string };
}) {
  const router = useRouter();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMemberDetails();
  }, [params.organizationId, params.memberId]);

  const fetchMemberDetails = async () => {
    try {
      const response = await fetch(
        `/api/organization/${params.organizationId}/members/${params.memberId}`
      );
      if (!response.ok) {
        throw new Error('メンバー情報の取得に失敗しました');
      }
      const data = await response.json();
      setMember(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : '予期せぬエラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (newRole: string) => {
    try {
      const response = await fetch(
        `/api/organization/${params.organizationId}/members/${params.memberId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role: newRole }),
        }
      );

      if (!response.ok) {
        throw new Error('権限の変更に失敗しました');
      }

      const updatedMember = await response.json();
      setMember(updatedMember);
      sonnerToast.success('権限を変更しました', {
        description: `${member?.user.email}の権限を${newRole}に変更しました`,
      });
    } catch (error) {
      sonnerToast.error('エラー', {
        description: error instanceof Error ? error.message : '予期せぬエラーが発生しました',
      });
    }
  };

  const handleDelete = async () => {
    if (!confirm('このメンバーを削除してもよろしいですか？')) {
      return;
    }

    try {
      const response = await fetch(
        `/api/organization/${params.organizationId}/members/${params.memberId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('メンバーの削除に失敗しました');
      }

      sonnerToast.success('メンバーを削除しました', {
        description: `${member?.user.email}を組織から削除しました`,
      });
      router.push(`/organization/${params.organizationId}/members`);
    } catch (error) {
      sonnerToast.error('エラー', {
        description: error instanceof Error ? error.message : '予期せぬエラーが発生しました',
      });
    }
  };

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!member) {
    return <div>メンバーが見つかりません</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>メンバー詳細</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>名前</Label>
              <div>
                {member.user.firstName} {member.user.lastName}
              </div>
            </div>
            <div>
              <Label>メールアドレス</Label>
              <div>{member.user.email}</div>
            </div>
            <div>
              <Label>権限</Label>
              <Select
                value={member.role}
                onValueChange={handleRoleChange}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">管理者</SelectItem>
                  <SelectItem value="member">メンバー</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="pt-4">
              <Button
                variant="destructive"
                onClick={handleDelete}
              >
                メンバーを削除
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 