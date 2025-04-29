import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { requireOrganizationAdminAccess } from '@/lib/organizationAuth';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// メンバー一覧の取得
export async function GET(
  req: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    await requireOrganizationAdminAccess(params.organizationId);

    const members = await prisma.organizationMembership.findMany({
      where: { 
        organizationId: params.organizationId,
        user: {
          systemRole: null // システムチームのユーザーを除外
        }
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          }
        }
      }
    });

    return NextResponse.json(members);
  } catch (error) {
    console.error('Error in GET /api/organization/[organizationId]/members:', error);
    if (error instanceof Error && error.message.includes('権限エラー')) {
      return new NextResponse(error.message, { status: 401 });
    }
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// メンバー招待
export async function POST(
  req: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    if (!process.env.NEXT_PUBLIC_APP_URL) {
      throw new Error('NEXT_PUBLIC_APP_URL is not set');
    }
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set');
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await requireOrganizationAdminAccess(params.organizationId);

    const { email, role } = await req.json();
    if (!email || !role) {
      return new NextResponse('必須項目が不足しています', { status: 400 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse('認証エラー', { status: 401 });
    }

    // 招待レコードを作成
    const invitation = await prisma.organizationInvitation.create({
      data: {
        email,
        role,
        organizationId: params.organizationId,
        invitedBy: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7日後
      }
    });

    // 招待メールを送信
    const { data, error } = await resend.emails.send({
      from: 'AppNexana <no-reply@appnexana.com>',
      to: email,
      subject: '組織への招待',
      html: `
        <h1>組織への招待</h1>
        <p>以下のリンクから組織に参加してください：</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/organization/${params.organizationId}/invite/accept">招待を受け入れる</a>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new NextResponse('招待メールの送信に失敗しました', { status: 500 });
    }

    return NextResponse.json({ invitation, emailResponse: data });
  } catch (error) {
    console.error('Invitation error details:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    if (error instanceof Error) {
      if (error.message.includes('権限エラー')) {
        return new NextResponse(error.message, { status: 401 });
      }
      if (error.message.includes('Unique constraint')) {
        return new NextResponse('このメールアドレスは既に招待されています', { status: 400 });
      }
      if (error.message.includes('is not set')) {
        return new NextResponse('サーバーの設定が不完全です', { status: 500 });
      }
      // エラーメッセージを返す
      return new NextResponse(error.message, { status: 500 });
    }
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 