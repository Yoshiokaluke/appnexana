'use client';

import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

export function AuthSync() {
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    async function syncUser() {
      if (isLoaded && userId) {
        try {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
          });
          
          if (!response.ok) {
            console.error('Failed to sync user:', await response.text());
          }
        } catch (error) {
          console.error('Error syncing user:', error);
        }
      }
    }

    syncUser();
  }, [isLoaded, userId]);

  return null; // このコンポーネントは表示要素を持ちません
} 