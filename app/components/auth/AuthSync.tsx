'use client';

import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

export function AuthSync() {
  const { isLoaded, userId, getToken } = useAuth();

  useEffect(() => {
    async function syncUser() {
      console.log('AuthSync: 同期処理を開始します');
      console.log('AuthSync: isLoaded:', isLoaded);
      console.log('AuthSync: userId:', userId);

      if (!isLoaded) {
        console.log('AuthSync: 認証がまだ読み込まれていません');
        return;
      }

      if (!userId) {
        console.log('AuthSync: ユーザーが認証されていません');
        return;
      }

      try {
        console.log('AuthSync: トークンを取得します');
        const token = await getToken();
        console.log('AuthSync: トークン取得完了');

        console.log('AuthSync: ユーザー同期APIを呼び出します');
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('AuthSync: ユーザー同期に失敗しました:', {
            status: response.status,
            statusText: response.statusText,
            error: errorText,
          });
          return;
        }

        console.log('AuthSync: ユーザー同期が成功しました');
      } catch (error) {
        console.error('AuthSync: ユーザー同期中にエラーが発生しました:', error);
      }
    }

    syncUser();
  }, [isLoaded, userId]);

  return null;
}