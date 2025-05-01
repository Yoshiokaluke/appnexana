"use client";

import { User } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Mail, MapPin, Pencil } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

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

export function ProfileView({ user, clerkId }: ProfileViewProps) {
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

  return (
    <div className="max-w-4xl mx-auto">
      {/* ヘッダー部分 */}
      <div className="relative mb-8">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg" />
        <div className="absolute -bottom-16 left-8 flex items-end space-x-4">
          <Avatar className="h-32 w-32 border-4 border-white">
            <AvatarFallback>
              {user.firstName?.charAt(0)}
              {user.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="mb-4 text-white">
            <h1 className="text-2xl font-bold">
              {user.lastName} {user.firstName}
            </h1>
            <p className="text-gray-200">{user.email}</p>
          </div>
        </div>
        <div className="absolute right-8 bottom-4">
          <Link href={`/organization-list/users/${clerkId}/settings/profile`}>
            <Button variant="secondary" size="sm">
              <Pencil className="w-4 h-4 mr-2" />
              プロフィールを編集
            </Button>
          </Link>
        </div>
      </div>

      {/* プロフィール情報 */}
      <div className="mt-20 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">基本情報</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">{getGenderLabel(user.profile?.gender)}</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                <span>{formatDate(user.profile?.birthday)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">SNSリンク</h2>
            <div className="space-y-4">
              {user.profile?.snsLinks?.facebook && (
                <a
                  href={user.profile.snsLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:underline"
                >
                  <FacebookIcon className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              )}
              {user.profile?.snsLinks?.instagram && (
                <a
                  href={user.profile.snsLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-pink-600 hover:underline"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              )}
              {user.profile?.snsLinks?.linkedin && (
                <a
                  href={user.profile.snsLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-800 hover:underline"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {!user.profile?.snsLinks?.facebook &&
                !user.profile?.snsLinks?.instagram &&
                !user.profile?.snsLinks?.linkedin && (
                  <p className="text-gray-500">SNSリンクは設定されていません</p>
                )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 