"use client";

import { User as UserType } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Mail, MapPin, Pencil, User, Users } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DateSelect } from "@/components/ui/date-select";

interface ProfileViewProps {
  user: {
    email: string;
    firstName: string | null;
    lastName: string | null;
    profile: {
      id: string;
      clerkId: string;
      birthday: Date | null;
      gender: string | null;
      snsLinks: any;
      createdAt: Date;
      updatedAt: Date;
    } | null;
  };
  clerkId: string;
}

type SnsLinks = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
};

const SNS_PATTERNS = {
  facebook: /^https?:\/\/(www\.)?(facebook|fb)\.com\/.+/,
  linkedin: /^https?:\/\/(www\.)?linkedin\.com\/.+/,
  instagram: /^https?:\/\/(www\.)?instagram\.com\/.+/,
};

interface SnsLink {
  platform: 'facebook' | 'linkedin' | 'instagram';
  url: string;
  isEditing: boolean;
  editValue: string;
}

export function ProfileView({ user: initialUser, clerkId }: ProfileViewProps) {
  const [user, setUser] = useState(initialUser);
  const [snsLinks, setSnsLinks] = useState<SnsLink[]>([
    { platform: 'facebook', url: initialUser.profile?.snsLinks?.facebook || '', isEditing: false, editValue: initialUser.profile?.snsLinks?.facebook || '' },
    { platform: 'linkedin', url: initialUser.profile?.snsLinks?.linkedin || '', isEditing: false, editValue: initialUser.profile?.snsLinks?.linkedin || '' },
    { platform: 'instagram', url: initialUser.profile?.snsLinks?.instagram || '', isEditing: false, editValue: initialUser.profile?.snsLinks?.instagram || '' },
  ]);

  const [isEditingGender, setIsEditingGender] = useState(false);
  const [isEditingBirthday, setIsEditingBirthday] = useState(false);
  const [editingGender, setEditingGender] = useState(initialUser.profile?.gender || '');
  const [editingBirthday, setEditingBirthday] = useState<Date | undefined>(
    initialUser.profile?.birthday ? new Date(initialUser.profile.birthday) : undefined
  );

  const formatDate = (date: Date | null | undefined) => {
    if (!date) return "未設定";
    return new Date(date).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getGenderLabel = (gender: string | null | undefined) => {
    switch (gender) {
      case "male":
        return "男性";
      case "female":
        return "女性";
      case "other":
        return "その他";
      default:
        return "未設定";
    }
  };

  const validateUrl = (platform: keyof typeof SNS_PATTERNS, value: string) => {
    if (value && !SNS_PATTERNS[platform].test(value)) {
      toast.error("正しいURLを入力してください");
      return false;
    }
    return true;
  };

  const handleEdit = (platform: SnsLink['platform']) => {
    setSnsLinks(links => links.map(link => 
      link.platform === platform 
        ? { ...link, isEditing: true }
        : link
    ));
  };

  const handleCancel = (platform: SnsLink['platform']) => {
    setSnsLinks(links => links.map(link => 
      link.platform === platform 
        ? { ...link, isEditing: false, editValue: link.url }
        : link
    ));
  };

  const handleSave = async (platform: SnsLink['platform']) => {
    const link = snsLinks.find(l => l.platform === platform);
    if (!link) return;

    if (!validateUrl(platform, link.editValue)) return;

    try {
      const response = await fetch(`/api/users/${clerkId}/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          snsLinks: {
            ...user.profile?.snsLinks,
            [platform]: link.editValue,
          },
        }),
      });

      if (!response.ok) throw new Error();

      setUser(prev => ({
        ...prev,
        profile: {
          ...prev.profile!,
          snsLinks: {
            ...prev.profile!.snsLinks,
            [platform]: link.editValue,
          },
        },
      }));

      setSnsLinks(links => links.map(l => 
        l.platform === platform 
          ? { ...l, url: l.editValue, isEditing: false }
          : l
      ));

      toast.success("SNSリンクを更新しました");
    } catch {
      toast.error("更新に失敗しました");
    }
  };

  const handleChange = (platform: SnsLink['platform'], value: string) => {
    setSnsLinks(links => links.map(link => 
      link.platform === platform 
        ? { ...link, editValue: value }
        : link
    ));
  };

  const getSnsIcon = (platform: SnsLink['platform']) => {
    switch (platform) {
      case 'facebook':
        return <FacebookIcon className="w-5 h-5 text-blue-600" />;
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5 text-blue-800" />;
      case 'instagram':
        return <InstagramIcon className="w-5 h-5 text-pink-600" />;
    }
  };

  const handleSaveGender = async () => {
    try {
      const response = await fetch(`/api/users/${clerkId}/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender: editingGender,
        }),
      });

      if (!response.ok) throw new Error();

      setUser(prev => ({
        ...prev,
        profile: {
          ...prev.profile!,
          gender: editingGender,
        },
      }));

      toast.success("性別を更新しました");
      setIsEditingGender(false);
    } catch {
      toast.error("更新に失敗しました");
    }
  };

  const handleSaveBirthday = async () => {
    try {
      const response = await fetch(`/api/users/${clerkId}/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dateOfBirth: editingBirthday || null,
        }),
      });

      if (!response.ok) throw new Error();

      setUser(prev => ({
        ...prev,
        profile: {
          ...prev.profile!,
          birthday: editingBirthday || null,
        },
      }));

      toast.success("生年月日を更新しました");
      setIsEditingBirthday(false);
    } catch {
      toast.error("更新に失敗しました");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* ヘッダー部分 */}
      <div className="relative mb-16">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg relative">
        </div>
        <div className="absolute -bottom-16 left-8">
          <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
            <AvatarFallback />
          </Avatar>
        </div>
      </div>

      {/* プロフィール情報 - 新デザイン */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-8 px-4 md:px-8 mt-20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            プロフィール情報
          </h2>
          <Link href={`/organization-list/users/${clerkId}/settings/profile`}>
            <Button variant="secondary" className="py-2 inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0 text-secondary-foreground shadow-sm h-7 rounded-md px-2.5 text-[9px] bg-white hover:bg-gray-100">
              <Pencil className="w-3 h-3" />
              <span className="scale-90 mx-0.5">プロフィールを編集</span>
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow"
        >
          <div className="grid gap-4">
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-blue-100 rounded-full shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">氏名</p>
                <p className="font-medium text-gray-900">{user.lastName} {user.firstName}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="p-3 bg-purple-100 rounded-full shrink-0">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500">性別</p>
                {isEditingGender ? (
                  <div className="flex items-center space-x-2">
                    <Select
                      value={editingGender}
                      onValueChange={setEditingGender}
                    >
                      <SelectTrigger className="w-[180px]">
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
                          setEditingGender(user.profile?.gender || '');
                        }}
                      >
                        キャンセル
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{getGenderLabel(user.profile?.gender)}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsEditingGender(true)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-blue-100 rounded-full shrink-0">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">メールアドレス</p>
                <p className="font-medium text-gray-900 break-all">{user.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="p-3 bg-purple-100 rounded-full shrink-0">
                <CalendarIcon className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500">生年月日</p>
                {isEditingBirthday ? (
                  <div className="flex items-center space-x-2">
                    <DateSelect
                      value={editingBirthday}
                      onChange={setEditingBirthday}
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
                          setEditingBirthday(user.profile?.birthday ? new Date(user.profile.birthday) : undefined);
                        }}
                      >
                        キャンセル
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{formatDate(user.profile?.birthday)}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsEditingBirthday(true)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            SNSリンク
          </h2>
          <div className="space-y-4">
            {snsLinks.map(link => (
              <div key={link.platform} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg group">
                {link.isEditing ? (
                  <>
                    <div className="p-3 bg-gray-100 rounded-full shrink-0">
                      {getSnsIcon(link.platform)}
                    </div>
                    <div className="flex-1">
                      <Input
                        value={link.editValue}
                        onChange={(e) => handleChange(link.platform, e.target.value)}
                        placeholder={`https://www.${link.platform}.com/username`}
                        className="w-full"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSave(link.platform)}
                      >
                        保存
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCancel(link.platform)}
                      >
                        キャンセル
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 bg-gray-100 rounded-full shrink-0">
                      {getSnsIcon(link.platform)}
                    </div>
                    <div className="flex-1 min-w-0">
                      {link.url ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-blue-600 transition-colors truncate block"
                        >
                          {link.url}
                        </a>
                      ) : (
                        <span className="text-gray-500">未設定</span>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(link.platform)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 