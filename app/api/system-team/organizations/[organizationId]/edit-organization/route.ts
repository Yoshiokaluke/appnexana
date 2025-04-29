import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { systemTeamAuth } from '@/app/lib/middleware/systemTeamAuth';

// 組織詳細の取得
export async function GET(
  req: Request,
  { params }: { params: { organizationId: string } }
) {
  const { user, error } = await systemTeamAuth();
  if (error || !user) return error;

  try {
    const { organizationId } = params;
    if (!organizationId) {
      return new NextResponse('組織IDは必須です', { status: 400 });
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
    console.error('Error in GET /api/system-team/organizations/[organizationId]/edit-organization:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// 組織詳細の更新
export async function PATCH(
  req: Request,
  { params }: { params: { organizationId: string } }
) {
  const { user, error } = await systemTeamAuth();
  if (error || !user) return error;

  try {
    const { organizationId } = params;
    if (!organizationId) {
      return new NextResponse('組織IDは必須です', { status: 400 });
    }

    const { name, address, managerName } = await req.json();
    if (!name) {
      return new NextResponse('組織名は必須です', { status: 400 });
    }

    const organization = await prisma.organization.update({
      where: { id: organizationId },
      data: {
        name,
        address,
        managerName
      }
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error in PATCH /api/system-team/organizations/[organizationId]/edit-organization:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// 組織の削除
export async function DELETE(
  req: Request,
  { params }: { params: { organizationId: string } }
) {
  const { user, error } = await systemTeamAuth();
  if (error || !user) return error;

  try {
    const { organizationId } = params;
    if (!organizationId) {
      return new NextResponse('組織IDは必須です', { status: 400 });
    }

    // トランザクションで関連データを削除
    await prisma.$transaction([
      // 組織に関連するメンバーシップを削除
      prisma.organizationMembership.deleteMany({
        where: { organizationId }
      }),
      // 組織に関連するプロファイルを削除
      prisma.organizationProfile.deleteMany({
        where: { organizationId }
      }),
      // 組織に関連するスキャナーを削除
      prisma.qrScanner.deleteMany({
        where: { organizationId }
      }),
      // 組織に関連する招待を削除
      prisma.organizationInvitation.deleteMany({
        where: { organizationId }
      }),
      // 組織を削除
      prisma.organization.delete({
        where: { id: organizationId }
      })
    ]);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error in DELETE /api/system-team/organizations/[organizationId]/edit-organization:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 