'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';

export default function AcceptInvitationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const organizationId = params.organizationId as string;
  const invitationId = searchParams.get('invitationId');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!invitationId) {
      setError('招待IDが見つかりません');
      setIsLoading(false);
      return;
    }

    acceptInvitation();
  }, [organizationId, invitationId]);

  const acceptInvitation = async () => {
    try {
      const response = await fetch(
        `/api/organization/${organizationId}/invitation/accept`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            invitationId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(await response.text());
      }

      // 招待の受け入れに成功したら組織のホームページにリダイレクト
      router.push(`/organization/${organizationId}`);
    } catch (error) {
      console.error('Error:', error);
      setError('招待の受け入れに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">招待を処理中...</h2>
        <p className="text-gray-600">しばらくお待ちください</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">エラー</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return null;
} 