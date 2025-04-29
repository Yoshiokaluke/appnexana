import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // ユーザーをデータベースに作成
    await prisma.user.create({
      data: {
        clerkId: userId,
        email: '', // Clerkから取得する必要があります
        roles: [],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in register:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 