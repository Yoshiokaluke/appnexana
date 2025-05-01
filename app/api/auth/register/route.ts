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

    console.log('Clerk user data:', {
      userId,
      email: user.emailAddresses[0]?.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName
    });

    // 既存のユーザーを確認
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { systemRole: true }
    });

    console.log('Existing user:', existingUser);

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
    // エラーの詳細をログに出力
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    return NextResponse.json(
      { 
        error: '内部サーバーエラーが発生しました',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 