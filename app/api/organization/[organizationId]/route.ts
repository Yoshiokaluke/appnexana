import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

// 組織詳細の取得
export async function GET(
  req: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // ユーザー情報を取得してシステムチーム権限を確認
    const user = await prisma.user.findUnique({
      where: { clerkId },
      select: { systemRole: true }
    });

    if (!user) {
      return new NextResponse('ユーザーが見つかりません', { status: 404 });
    }

    // システムチームメンバーでない場合、メンバーシップを確認
    if (user.systemRole !== 'system_team') {
      const membership = await prisma.organizationMembership.findUnique({
        where: {
          clerkId_organizationId: {
            clerkId,
            organizationId: params.organizationId,
          },
        },
      });

      if (!membership) {
        return new NextResponse('この組織へのアクセス権限がありません', { status: 403 });
      }
    }

    // 組織情報の取得
    const organization = await prisma.organization.findUnique({
      where: {
        id: params.organizationId,
      },
      include: {
        _count: {
          select: {
            memberships: true,
            qrScanners: true
          }
        },
        memberships: {
          include: {
            user: {
              select: {
                clerkId: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    if (!organization) {
      return new NextResponse('組織が見つかりません', { status: 404 });
    }

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error fetching organization:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 