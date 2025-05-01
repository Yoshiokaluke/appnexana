'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@clerk/nextjs';

interface Organization {
  id: string;
  name: string;
}

export default function OrganizationListPage() {
  const router = useRouter();
  const { userId } = useAuth();
  const { user, isLoaded } = useUser();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        console.log('Fetching organizations for userId:', userId);
        const response = await fetch('/api/organizations/list');
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', {
            status: response.status,
            statusText: response.statusText,
            body: errorText
          });
          throw new Error('組織の取得に失敗しました');
        }
        const data = await response.json();
        console.log('Received organizations:', data);
        setOrganizations(data);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchOrganizations();
    } else {
      console.log('No userId available yet');
    }
  }, [userId]);

  useEffect(() => {
    const syncUserData = async () => {
      if (!user) return;

      try {
        const response = await fetch(`/api/users/${user.id}/profile`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.emailAddresses[0]?.emailAddress || "",
            firstName: user.firstName || "",
            lastName: user.lastName || "",
          }),
        });

        if (!response.ok) {
          console.error("Failed to sync user data");
        }
      } catch (error) {
        console.error("Error syncing user data:", error);
      }
    };

    if (isLoaded && user) {
      syncUserData();
    }
  }, [user, isLoaded]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">読み込み中...</h1>
          <p>しばらくお待ちください</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">ワークスペースを選択</h1>
      {organizations.length === 0 ? (
        <p className="text-gray-600">所属している組織がありません</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org) => (
            <button
              key={org.id}
              onClick={() => router.push(`/organization/${org.id}`)}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <h2 className="font-semibold">{org.name}</h2>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 