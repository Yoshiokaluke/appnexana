import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { isSystemTeam } from '@/app/lib/auth';
import { checkOrganizationRole } from '@/app/lib/auth';

// メンバーの削除
export async function DELETE(
  req: Request,
  { params }: { params: { organizationId: string; memberId: string } }
) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { organizationId, memberId } = params;
    if (!organizationId || !memberId) {
      return new NextResponse('組織IDとメンバーIDは必須です', { status: 400 });
    }

    // システムチーム権限チェック
    const isSystemTeamMember = await isSystemTeam();

    // 組織のadmin権限チェック
    const hasOrgAdminAccess = await checkOrganizationRole(clerkUserId, organizationId, 'admin');

    // どちらの権限もない場合はアクセス拒否
    if (!isSystemTeamMember && !hasOrgAdminAccess) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // 削除対象のメンバーシップを取得
    const targetMembership = await prisma.organizationMembership.findUnique({
      where: { id: memberId },
      include: {
        user: true
      }
    });

    if (!targetMembership) {
      return new NextResponse('メンバーが見つかりません', { status: 404 });
    }

    // 組織の最後の管理者は削除できない
    if (targetMembership.role === 'admin') {
      const adminCount = await prisma.organizationMembership.count({
        where: {
          organizationId,
          role: 'admin'
        }
      });

      if (adminCount === 1) {
        return new NextResponse('組織の最後の管理者は削除できません', { status: 400 });
      }
    }

    // メンバーシップの削除
    await prisma.organizationMembership.delete({
      where: { id: memberId }
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error in DELETE /api/organization/[organizationId]/members/[memberId]:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// メンバー詳細の取得
export async function GET(
  req: Request,
  { params }: { params: { organizationId: string; memberId: string } }
) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { organizationId, memberId } = params;
    if (!organizationId || !memberId) {
      return new NextResponse('組織IDとメンバーIDは必須です', { status: 400 });
    }

    // システムチーム権限チェック
    const isSystemTeamMember = await isSystemTeam();

    // 組織のadmin権限チェック
    const hasOrgAdminAccess = await checkOrganizationRole(clerkUserId, organizationId, 'admin');

    // どちらの権限もない場合はアクセス拒否
    if (!isSystemTeamMember && !hasOrgAdminAccess) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const member = await prisma.organizationMembership.findUnique({
      where: {
        id: memberId,
        organizationId
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

    if (!member) {
      return new NextResponse('メンバーが見つかりません', { status: 404 });
    }

    return NextResponse.json(member);
  } catch (error) {
    console.error('Error in GET /api/organization/[organizationId]/members/[memberId]:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// メンバーの権限変更
export async function PATCH(
  req: Request,
  { params }: { params: { organizationId: string; memberId: string } }
) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { organizationId, memberId } = params;
    if (!organizationId || !memberId) {
      return new NextResponse('組織IDとメンバーIDは必須です', { status: 400 });
    }

    // システムチーム権限チェック
    const isSystemTeamMember = await isSystemTeam();

    // 組織のadmin権限チェック
    const hasOrgAdminAccess = await checkOrganizationRole(clerkUserId, organizationId, 'admin');

    // どちらの権限もない場合はアクセス拒否
    if (!isSystemTeamMember && !hasOrgAdminAccess) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const { role } = await req.json();
    if (!role || !['admin', 'member'].includes(role)) {
      return new NextResponse('有効な権限を指定してください', { status: 400 });
    }

    const updatedMember = await prisma.organizationMembership.update({
      where: {
        id: memberId,
        organizationId
      },
      data: { role },
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

    return NextResponse.json(updatedMember);
  } catch (error) {
    console.error('Error in PATCH /api/organization/[organizationId]/members/[memberId]:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 