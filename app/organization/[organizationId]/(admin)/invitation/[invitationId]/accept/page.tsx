'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface AcceptInvitationPageProps {
  params: {
    organizationId: string;
    invitationId: string;
  };
}

export default function AcceptInvitationPage({ params }: AcceptInvitationPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const acceptInvitation = async () => {
      try {
        const response = await fetch(
          `/api/organization/${params.organizationId}/invitation/${params.invitationId}/accept`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const responseText = await response.text();
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('招待が見つかりません。招待の有効期限が切れている可能性があります。');
          }
          if (response.status === 400 && responseText.includes('既にこの組織のメンバーです')) {
            toast.info('既にこの組織のメンバーです');
            router.push(`/organization/${params.organizationId}`);
            return;
          }
          throw new Error(responseText || '招待の受け入れに失敗しました');
        }

        toast.success('組織に参加しました');
        // 組織リストを更新するためにorganization-listページに一度リダイレクトしてから
        // 該当の組織ページに移動
        router.push('/organization-list');
        setTimeout(() => {
          router.push(`/organization/${params.organizationId}`);
        }, 100);
      } catch (error) {
        console.error('Accept invitation error:', error);
        toast.error(error instanceof Error ? error.message : '予期せぬエラーが発生しました');
        router.push('/organization-list');
      } finally {
        setIsLoading(false);
      }
    };

    acceptInvitation();
  }, [params.organizationId, params.invitationId, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">招待を受け入れています...</h1>
        <p>しばらくお待ちください</p>
      </div>
    </div>
  );
} 