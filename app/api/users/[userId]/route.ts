import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId: clerkUserId } = await auth();

    // 認証チェック
    if (!clerkUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findFirst({
      where: {
        clerkId: params.userId,
      },
      select: {
        id: true,
        email: true,
        systemRole: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error in GET /api/users/[userId]:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 