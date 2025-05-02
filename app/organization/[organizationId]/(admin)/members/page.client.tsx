'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { toast } from 'sonner';

interface Member {
  id: string;
  role: 'admin' | 'member';
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
  };
}

export default function MembersClient({ organizationId }: { organizationId: string }) {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`/api/organization/${organizationId}/members`);
        if (!response.ok) {
          throw new Error('メンバー一覧の取得に失敗しました');
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'メンバー一覧の取得に失敗しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, [organizationId]);

  const handleInvite = () => {
    router.push(`/organization/${organizationId}/members/invite`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">メンバー一覧</h1>
        <Button onClick={handleInvite}>メンバーを招待</Button>
      </div>

      <div className="grid gap-4">
        {members.map((member) => (
          <Card key={member.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">
                  {member.user.firstName} {member.user.lastName}
                </div>
                <div className="text-sm text-gray-500">{member.user.email}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm px-2 py-1 rounded bg-gray-100">
                  {member.role === 'admin' ? '管理者' : 'メンバー'}
                </span>
                <Button
                  variant="default"
                  className="px-3 py-1 text-sm"
                  onClick={() => router.push(`/organization/${organizationId}/members/${member.id}`)}
                >
                  詳細
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 