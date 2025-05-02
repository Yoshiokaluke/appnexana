'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DateSelect } from "@/components/ui/date-select";
import { SnsLinksForm } from "@/components/profile/SnsLinksForm";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Mail, Pencil, User } from "lucide-react";
import { motion } from "framer-motion";

type OrganizationProfile = {
  id: string;
  clerkId: string;
  organizationId: string;
  displayName: string | null;
  department: string | null;
  introduction: string | null;
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
};

type User = {
  email: string;
  firstName: string | null;
  lastName: string | null;
  profile: {
    birthday: Date | null;
    gender: string | null;
    snsLinks: {
      facebook: string;
      instagram: string;
      linkedin: string;
    } | null;
  } | null;
};

// ボタン共通スタイル
const ActionButtons = ({ onSave, onCancel, disabled }: { onSave: () => void; onCancel: () => void; disabled?: boolean }) => (
  <div className="flex justify-end gap-2 mt-2">
    <Button type="button" variant="default" size="sm" onClick={onSave} disabled={disabled}>保存</Button>
    <Button type="button" variant="outline" size="sm" onClick={onCancel}>キャンセル</Button>
  </div>
);

// 部署リスト取得用フック
function useDepartments(organizationId: string) {
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/organization/${organizationId}/departments`)
      .then(res => res.json())
      .then(data => {
        setDepartments(data);
        setLoading(false);
      });
  }, [organizationId]);
  return { departments, loading };
}

export default function OrganizationProfilePage() {
  const params = useParams();
  const { user: clerkUser } = useUser();
  const [organizationProfile, setOrganizationProfile] = useState<OrganizationProfile | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditingDisplayName, setIsEditingDisplayName] = useState(false);
  const [isEditingDepartment, setIsEditingDepartment] = useState(false);
  const [isEditingIntroduction, setIsEditingIntroduction] = useState(false);
  const [isEditingBirthday, setIsEditingBirthday] = useState(false);
  const [isEditingGender, setIsEditingGender] = useState(false);
  const [isEditingSnsLinks, setIsEditingSnsLinks] = useState(false);
  const [editingDisplayName, setEditingDisplayName] = useState('');
  const [editingDepartment, setEditingDepartment] = useState('');
  const [editingIntroduction, setEditingIntroduction] = useState('');
  const [editingBirthday, setEditingBirthday] = useState<Date | undefined>();
  const [editingGender, setEditingGender] = useState('');
  const [editingSnsLinks, setEditingSnsLinks] = useState({
    facebook: '',
    instagram: '',
    linkedin: '',
  });
  const [editingDepartmentId, setEditingDepartmentId] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, [params.organizationId, params.clerkId]);

  const fetchData = async () => {
    try {
      // 組織プロフィールの取得
      const profileResponse = await fetch(`/api/organization/${params.organizationId}/members/${params.clerkId}/profile`);
      if (!profileResponse.ok) {
        throw new Error('プロフィールの取得に失敗しました');
      }
      const profileData = await profileResponse.json();
      setOrganizationProfile(profileData);

      // ユーザー情報の取得
      const userResponse = await fetch(`/api/users/${params.clerkId}/profile`);
      if (!userResponse.ok) {
        throw new Error('ユーザー情報の取得に失敗しました');
      }
      const userData = await userResponse.json();
      setUser(userData);

      // 編集用の状態を設定
      setEditingDisplayName(profileData.displayName || '');
      setEditingDepartment(profileData.department || '');
      setEditingIntroduction(profileData.introduction || '');
      setEditingBirthday(userData.profile?.birthday ? new Date(userData.profile.birthday) : undefined);
      setEditingGender(userData.profile?.gender || '');
      setEditingSnsLinks(userData.profile?.snsLinks || {
        facebook: '',
        instagram: '',
        linkedin: '',
      });
      setEditingDepartmentId(organizationProfile?.department || '');
    } catch (error) {
      console.error('Error:', error);
      toast.error('データの取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveDisplayName = async () => {
    try {
      const response = await fetch(`/api/organization/${params.organizationId}/members/${params.clerkId}/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          displayName: editingDisplayName,
        }),
      });

      if (!response.ok) {
        throw new Error('更新に失敗しました');
      }

      setOrganizationProfile(prev => prev ? { ...prev, displayName: editingDisplayName } : null);
      setIsEditingDisplayName(false);
      toast.success('表示名を更新しました');
    } catch (error) {
      console.error('Error:', error);
      toast.error('更新に失敗しました');
    }
  };

  const handleSaveDepartment = async () => {
    try {
      const response = await fetch(`/api/organization/${params.organizationId}/members/${params.clerkId}/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          departmentId: editingDepartmentId,
        }),
      });
      if (!response.ok) throw new Error('更新に失敗しました');
      setIsEditingDepartment(false);
      toast.success('部署を更新しました');
      fetchData();
    } catch (error) {
      toast.error('更新に失敗しました');
    }
  };

  const handleSaveIntroduction = async () => {
    try {
      const response = await fetch(`/api/organization/${params.organizationId}/members/${params.clerkId}/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          introduction: editingIntroduction,
        }),
      });

      if (!response.ok) {
        throw new Error('更新に失敗しました');
      }

      setOrganizationProfile(prev => prev ? { ...prev, introduction: editingIntroduction } : null);
      setIsEditingIntroduction(false);
      toast.success('自己紹介を更新しました');
    } catch (error) {
      console.error('Error:', error);
      toast.error('更新に失敗しました');
    }
  };

  const handleSaveBirthday = async () => {
    try {
      const response = await fetch(`/api/users/${params.clerkId}/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          birthday: editingBirthday,
        }),
      });

      if (!response.ok) {
        throw new Error('更新に失敗しました');
      }

      setUser(prev => prev ? {
        ...prev,
        profile: prev.profile ? { ...prev.profile, birthday: editingBirthday || null } : null
      } : null);
      setIsEditingBirthday(false);
      toast.success('生年月日を更新しました');
    } catch (error) {
      console.error('Error:', error);
      toast.error('更新に失敗しました');
    }
  };

  const handleSaveGender = async () => {
    try {
      const response = await fetch(`/api/users/${params.clerkId}/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gender: editingGender,
        }),
      });

      if (!response.ok) {
        throw new Error('更新に失敗しました');
      }

      setUser(prev => prev ? {
        ...prev,
        profile: prev.profile ? { ...prev.profile, gender: editingGender } : null
      } : null);
      setIsEditingGender(false);
      toast.success('性別を更新しました');
    } catch (error) {
      console.error('Error:', error);
      toast.error('更新に失敗しました');
    }
  };

  const handleSaveSnsLinks = async () => {
    try {
      const response = await fetch(`/api/users/${params.clerkId}/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          snsLinks: editingSnsLinks,
        }),
      });

      if (!response.ok) {
        throw new Error('更新に失敗しました');
      }

      setUser(prev => prev ? {
        ...prev,
        profile: prev.profile ? { ...prev.profile, snsLinks: editingSnsLinks } : null
      } : null);
      setIsEditingSnsLinks(false);
      toast.success('SNSリンクを更新しました');
    } catch (error) {
      console.error('Error:', error);
      toast.error('更新に失敗しました');
    }
  };

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={organizationProfile?.profileImage || ''} />
              <AvatarFallback>
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold">
                {user?.firstName} {user?.lastName}
              </h2>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
            <div className="p-3 bg-blue-100 rounded-full shrink-0">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">表示名</p>
              {isEditingDisplayName ? (
                <div className="relative">
                  <Input
                    value={editingDisplayName}
                    onChange={(e) => setEditingDisplayName(e.target.value)}
                    className="w-full"
                  />
                  <ActionButtons
                    onSave={handleSaveDisplayName}
                    onCancel={() => {
                      setIsEditingDisplayName(false);
                      setEditingDisplayName(organizationProfile?.displayName || '');
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">
                    {organizationProfile?.displayName || '未設定'}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditingDisplayName(true)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
            <div className="p-3 bg-green-100 rounded-full shrink-0">
              <User className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">部署</p>
              {isEditingDepartment ? (
                <div className="relative">
                  <DepartmentSelect
                    organizationId={Array.isArray(params.organizationId) ? params.organizationId[0] : params.organizationId}
                    departmentId={editingDepartmentId}
                    onChange={setEditingDepartmentId}
                  />
                  <ActionButtons
                    onSave={handleSaveDepartment}
                    onCancel={() => {
                      setIsEditingDepartment(false);
                      setEditingDepartmentId(organizationProfile?.department || '');
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">
                    {organizationProfile?.department || '未設定'}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditingDepartment(true)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
            <div className="p-3 bg-purple-100 rounded-full shrink-0">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">自己紹介</p>
              {isEditingIntroduction ? (
                <div className="relative">
                  <Textarea
                    value={editingIntroduction}
                    onChange={(e) => setEditingIntroduction(e.target.value)}
                    className="w-full"
                  />
                  <ActionButtons
                    onSave={handleSaveIntroduction}
                    onCancel={() => {
                      setIsEditingIntroduction(false);
                      setEditingIntroduction(organizationProfile?.introduction || '');
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">
                    {organizationProfile?.introduction || '未設定'}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditingIntroduction(true)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
            <div className="p-3 bg-yellow-100 rounded-full shrink-0">
              <CalendarIcon className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">生年月日</p>
              {isEditingBirthday ? (
                <div className="relative">
                  <div className="flex flex-col md:flex-row gap-2 w-full">
                    <DateSelect
                      value={editingBirthday}
                      onChange={(date) => {
                        if (date?.getTime() !== editingBirthday?.getTime()) {
                          setEditingBirthday(date);
                        }
                      }}
                      defaultYear={1997}
                    />
                  </div>
                  <ActionButtons
                    onSave={handleSaveBirthday}
                    onCancel={() => {
                      setIsEditingBirthday(false);
                      setEditingBirthday(user?.profile?.birthday ? new Date(user.profile.birthday) : undefined);
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">
                    {user?.profile?.birthday
                      ? new Date(user.profile.birthday).toLocaleDateString('ja-JP')
                      : '未設定'}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditingBirthday(true)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
            <div className="p-3 bg-pink-100 rounded-full shrink-0">
              <User className="w-5 h-5 text-pink-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">性別</p>
              {isEditingGender ? (
                <div className="relative">
                  <Select
                    value={editingGender}
                    onValueChange={setEditingGender}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="性別を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">男性</SelectItem>
                      <SelectItem value="female">女性</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                  <ActionButtons
                    onSave={handleSaveGender}
                    onCancel={() => {
                      setIsEditingGender(false);
                      setEditingGender(user?.profile?.gender || '');
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">
                    {user?.profile?.gender === 'male'
                      ? '男性'
                      : user?.profile?.gender === 'female'
                      ? '女性'
                      : user?.profile?.gender === 'other'
                      ? 'その他'
                      : '未設定'}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditingGender(true)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
            <div className="p-3 bg-indigo-100 rounded-full shrink-0">
              <User className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">SNSリンク</p>
              {isEditingSnsLinks ? (
                <div className="relative">
                  <SnsLinksForm
                    snsLinks={editingSnsLinks}
                    setSnsLinks={setEditingSnsLinks}
                  />
                  <ActionButtons
                    onSave={handleSaveSnsLinks}
                    onCancel={() => {
                      setIsEditingSnsLinks(false);
                      setEditingSnsLinks(user?.profile?.snsLinks || {
                        facebook: '',
                        instagram: '',
                        linkedin: '',
                      });
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {user?.profile?.snsLinks?.facebook && (
                      <a
                        href={user.profile.snsLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Facebook
                      </a>
                    )}
                    {user?.profile?.snsLinks?.instagram && (
                      <a
                        href={user.profile.snsLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                      >
                        Instagram
                      </a>
                    )}
                    {user?.profile?.snsLinks?.linkedin && (
                      <a
                        href={user.profile.snsLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900"
                      >
                        LinkedIn
                      </a>
                    )}
                    {!user?.profile?.snsLinks?.facebook &&
                      !user?.profile?.snsLinks?.instagram &&
                      !user?.profile?.snsLinks?.linkedin && (
                        <p className="text-lg font-medium">未設定</p>
                      )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditingSnsLinks(true)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// 部署セレクトコンポーネント
function DepartmentSelect({ organizationId, departmentId, onChange }: { organizationId: string, departmentId: string, onChange: (id: string) => void }) {
  const { departments, loading } = useDepartments(organizationId);
  if (loading) return <div>読み込み中...</div>;
  if (!Array.isArray(departments)) return <div>部署情報の取得に失敗しました</div>;
  return (
    <Select value={departmentId} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="部署を選択" />
      </SelectTrigger>
      <SelectContent>
        {departments.map((dept) => (
          <SelectItem key={dept.id} value={dept.id}>
            {dept.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 