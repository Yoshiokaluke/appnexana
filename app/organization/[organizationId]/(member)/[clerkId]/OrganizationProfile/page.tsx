'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type Profile = {
  id: string;
  clerkId: string;
  organizationId: string;
  bio: string | null;
  position: string | null;
  department: string | null;
  phoneNumber: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function OrganizationProfilePage() {
  const params = useParams();
  const { user } = useUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    bio: '',
    position: '',
    department: '',
    phoneNumber: '',
  });

  useEffect(() => {
    fetchProfile();
  }, [params.organizationId, params.clerkId]);

  const fetchProfile = async () => {
    try {
      const response = await fetch(`/api/organization/${params.organizationId}/members/${params.clerkId}/profile`);
      if (!response.ok) {
        throw new Error('プロフィールの取得に失敗しました');
      }
      const data = await response.json();
      setProfile(data);
      setFormData({
        bio: data.bio || '',
        position: data.position || '',
        department: data.department || '',
        phoneNumber: data.phoneNumber || '',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('プロフィールの取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch(`/api/organization/${params.organizationId}/members/${params.clerkId}/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('プロフィールの更新に失敗しました');
      }

      const updatedProfile = await response.json();
      setProfile(updatedProfile);
      toast.success('プロフィールを更新しました');
    } catch (error) {
      console.error('Error:', error);
      toast.error('プロフィールの更新に失敗しました');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">組織プロフィール設定</h2>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>名前</Label>
            <p className="mt-1 text-gray-600">{user?.firstName} {user?.lastName}</p>
          </div>

          <div>
            <Label>メールアドレス</Label>
            <p className="mt-1 text-gray-600">{user?.emailAddresses[0].emailAddress}</p>
          </div>

          <div>
            <Label htmlFor="department">部署</Label>
            <Input
              id="department"
              value={formData.department}
              onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
              placeholder="例: 営業部"
            />
          </div>

          <div>
            <Label htmlFor="position">役職</Label>
            <Input
              id="position"
              value={formData.position}
              onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
              placeholder="例: マネージャー"
            />
          </div>

          <div>
            <Label htmlFor="phoneNumber">電話番号</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
              placeholder="例: 090-1234-5678"
            />
          </div>

          <div>
            <Label htmlFor="bio">自己紹介</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              placeholder="自己紹介を入力してください"
              rows={4}
            />
          </div>

          <Button type="submit" disabled={isSaving}>
            {isSaving ? '保存中...' : '保存する'}
          </Button>
        </form>
      </div>
    </div>
  );
} 