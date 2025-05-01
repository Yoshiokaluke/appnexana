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

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-purple-100 rounded-full shrink-0">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">性別</p>
                <p className="font-medium text-gray-900">{getGenderLabel(user.profile?.gender)}</p>
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

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-purple-100 rounded-full shrink-0">
                <CalendarIcon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">生年月日</p>
                <p className="font-medium text-gray-900">{formatDate(user.profile?.birthday)}</p>
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
            {user.profile?.snsLinks?.facebook && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                href={user.profile.snsLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <FacebookIcon className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors break-all">{user.profile.snsLinks.facebook}</span>
              </motion.a>
            )}
            {user.profile?.snsLinks?.instagram && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                href={user.profile.snsLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors group"
              >
                <InstagramIcon className="w-5 h-5 text-pink-600 mr-3 shrink-0" />
                <span className="text-gray-700 group-hover:text-pink-600 transition-colors break-all">{user.profile.snsLinks.instagram}</span>
              </motion.a>
            )}
            {user.profile?.snsLinks?.linkedin && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                href={user.profile.snsLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-800 mr-3 shrink-0" />
                <span className="text-gray-700 group-hover:text-blue-800 transition-colors break-all">{user.profile.snsLinks.linkedin}</span>
              </motion.a>
            )}
            {!user.profile?.snsLinks?.facebook &&
              !user.profile?.snsLinks?.instagram &&
              !user.profile?.snsLinks?.linkedin && (
                <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">SNSリンクは設定されていません</p>
                </div>
              )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 