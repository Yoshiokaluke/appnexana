import { auth, currentUser } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: '認証が必要です' },
        { status: 401 }
      );
    }

    // Clerkからユーザー情報を取得
    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'ユーザーが見つかりません' },
        { status: 404 }
      );
    }

    // 既存のユーザーを確認
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { systemRole: true }
    });

    // ユーザーを作成または更新
    const dbUser = await prisma.user.upsert({
      where: {
        clerkId: userId,
      },
      create: {
        clerkId: userId,
        email: user.emailAddresses[0]?.emailAddress ?? '',
        firstName: user.firstName ?? null,
        lastName: user.lastName ?? null,
        roles: [],
      },
      update: {
        email: user.emailAddresses[0]?.emailAddress ?? '',
        firstName: user.firstName ?? null,
        lastName: user.lastName ?? null,
      },
    });

    console.log('Synced user in database:', dbUser);
    return NextResponse.json({ success: true, user: dbUser });
  } catch (error) {
    console.error('Error in register:', error);
    return NextResponse.json(
      { error: '内部サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
} 