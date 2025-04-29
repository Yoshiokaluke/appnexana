import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { isSystemTeam } from '@/app/lib/auth';
import { checkOrganizationRole } from '@/app/lib/auth';

// 組織詳細の取得
export async function GET(
  req: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { organizationId } = params;
    if (!organizationId) {
      return new NextResponse('組織IDは必須です', { status: 400 });
    }

    // システムチーム権限チェック
    const isSystemTeamMember = await isSystemTeam();

    // 組織のadmin権限チェック
    const hasOrgAdminAccess = await checkOrganizationRole(clerkUserId, organizationId, 'admin');

    // どちらの権限もない場合はアクセス拒否
    if (!isSystemTeamMember && !hasOrgAdminAccess) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
      include: {
        _count: {
          select: {
            memberships: true,
            qrScanners: true
          }
        }
      }
    });

    if (!organization) {
      return new NextResponse('組織が見つかりません', { status: 404 });
    }

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error in GET /api/organization/[organizationId]:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 