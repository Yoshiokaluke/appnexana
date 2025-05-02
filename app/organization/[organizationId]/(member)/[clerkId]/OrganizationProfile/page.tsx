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
          department: editingDepartment,
        }),
      });

      if (!response.ok) {
        throw new Error('更新に失敗しました');
      }

      setOrganizationProfile(prev => prev ? { ...prev, department: editingDepartment } : null);
      setIsEditingDepartment(false);
      toast.success('部署を更新しました');
    } catch (error) {
      console.error('Error:', error);
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
                <div className="flex items-center space-x-2">
                  <Input
                    value={editingDisplayName}
                    onChange={(e) => setEditingDisplayName(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSaveDisplayName}
                    >
                      保存
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsEditingDisplayName(false);
                        setEditingDisplayName(organizationProfile?.displayName || '');
                      }}
                    >
                      キャンセル
                    </Button>
                  </div>
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
                <div className="flex items-center space-x-2">
                  <Input
                    value={editingDepartment}
                    onChange={(e) => setEditingDepartment(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSaveDepartment}
                    >
                      保存
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsEditingDepartment(false);
                        setEditingDepartment(organizationProfile?.department || '');
                      }}
                    >
                      キャンセル
                    </Button>
                  </div>
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
                <div className="flex flex-col space-y-2">
                  <Textarea
                    value={editingIntroduction}
                    onChange={(e) => setEditingIntroduction(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSaveIntroduction}
                    >
                      保存
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsEditingIntroduction(false);
                        setEditingIntroduction(organizationProfile?.introduction || '');
                      }}
                    >
                      キャンセル
                    </Button>
                  </div>
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
                <div className="flex items-center space-x-2">
                  <DateSelect
                    value={editingBirthday}
                    onChange={(date) => {
                      if (date?.getTime() !== editingBirthday?.getTime()) {
                        setEditingBirthday(date);
                      }
                    }}
                    defaultYear={1997}
                  />
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSaveBirthday}
                    >
                      保存
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsEditingBirthday(false);
                        setEditingBirthday(user?.profile?.birthday ? new Date(user.profile.birthday) : undefined);
                      }}
                    >
                      キャンセル
                    </Button>
                  </div>
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
                <div className="flex items-center space-x-2">
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
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSaveGender}
                    >
                      保存
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsEditingGender(false);
                        setEditingGender(user?.profile?.gender || '');
                      }}
                    >
                      キャンセル
                    </Button>
                  </div>
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
                <div className="flex flex-col space-y-2">
                  <SnsLinksForm
                    snsLinks={editingSnsLinks}
                    setSnsLinks={setEditingSnsLinks}
                  />
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSaveSnsLinks}
                    >
                      保存
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsEditingSnsLinks(false);
                        setEditingSnsLinks(user?.profile?.snsLinks || {
                          facebook: '',
                          instagram: '',
                          linkedin: '',
                        });
                      }}
                    >
                      キャンセル
                    </Button>
                  </div>
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