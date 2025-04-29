import { NextRequest, NextResponse } from 'next/server';
import { systemTeamAuth } from '../../../lib/middleware/systemTeamAuth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// リクエストボディのバリデーションスキーマ
const createMemberSchema = z.object({
  clerkId: z.string().min(1, 'Clerk IDは必須です'),
  role: z.enum(['system_team', 'user'] as const, {
    invalid_type_error: '無効なロールです',
  }),
});

export async function GET() {
  const authResponse = await systemTeamAuth();
  if (authResponse instanceof NextResponse) {
    return authResponse;
  }

  try {
    const members = await prisma.systemTeamMember.findMany({
      select: {
        id: true,
        clerkId: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching system team members:', error);
    return NextResponse.json(
      { error: 'システムチームメンバーの取得に失敗しました' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const authResponse = await systemTeamAuth();
  if (authResponse instanceof NextResponse) {
    return authResponse;
  }

  try {
    const json = await request.json();
    const validatedData = createMemberSchema.parse(json);

    const member = await prisma.systemTeamMember.create({
      data: {
        clerkId: validatedData.clerkId,
        role: validatedData.role,
      },
      select: {
        id: true,
        clerkId: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'バリデーションエラー', details: error.format() },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      console.error('Error creating system team member:', error);
      return NextResponse.json(
        { error: 'システムチームメンバーの作成に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: '予期せぬエラーが発生しました' },
      { status: 500 }
    );
  }
} 