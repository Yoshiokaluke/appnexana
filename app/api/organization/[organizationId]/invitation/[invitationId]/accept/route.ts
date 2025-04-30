import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  req: Request,
  { params }: { params: { organizationId: string; invitationId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // ユーザー情報を取得
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return new NextResponse('ユーザーが見つかりません', { status: 404 });
    }

    try {
      // すべての処理を1つのトランザクションで実行
      const result = await prisma.$transaction(async (tx) => {
        // 招待の存在と有効期限を確認
        const invitation = await tx.organizationInvitation.findFirst({
          where: {
            id: params.invitationId,
            organizationId: params.organizationId,
          },
        });

        if (!invitation) {
          throw new Error('招待が見つかりません。招待の有効期限が切れているか、既に使用されている可能性があります。');
        }

        if (invitation.expiresAt < new Date()) {
          // 期限切れの招待を削除
          await tx.organizationInvitation.delete({
            where: { id: params.invitationId }
          });
          throw new Error('招待の有効期限が切れています。新しい招待をリクエストしてください。');
        }

        // 既存のメンバーシップを確認
        const existingMembership = await tx.organizationMembership.findUnique({
          where: {
            clerkId_organizationId: {
              clerkId: user.clerkId,
              organizationId: params.organizationId,
            },
          },
        });

        if (existingMembership) {
          // 既存のメンバーシップがある場合は、招待を削除
          await tx.organizationInvitation.delete({
            where: { id: params.invitationId }
          });
          throw new Error('既にこの組織のメンバーです。招待は自動的に削除されました。');
        }

        // メンバーシップを作成
        await tx.organizationMembership.create({
          data: {
            clerkId: user.clerkId,
            organizationId: params.organizationId,
            role: invitation.role
          },
        });

        // 招待を削除
        await tx.organizationInvitation.delete({
          where: {
            id: params.invitationId,
          },
        });

        return { success: true };
      });

      return new NextResponse('Success', { status: 200 });
    } catch (error) {
      console.error('Error in transaction:', error);
      if (error instanceof Error) {
        if (error.message.includes('Unique constraint')) {
          return new NextResponse('既にこの組織のメンバーです。', { status: 400 });
        }
        return new NextResponse(error.message, { status: 400 });
      }
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  } catch (error) {
    console.error('Error accepting invitation:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 