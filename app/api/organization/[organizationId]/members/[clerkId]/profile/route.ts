import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/prisma';

// プロフィール取得
export async function GET(
  req: Request,
  { params }: { params: { organizationId: string; clerkId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const profile = await prisma.organizationProfile.findUnique({
      where: {
        clerkId_organizationId: {
          clerkId: params.clerkId,
          organizationId: params.organizationId,
        },
      },
    });

    if (!profile) {
      // プロフィールが存在しない場合は新規作成
      const newProfile = await prisma.organizationProfile.create({
        data: {
          clerkId: params.clerkId,
          organizationId: params.organizationId,
        },
      });
      return NextResponse.json(newProfile);
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error in GET /api/organization/[organizationId]/members/[clerkId]/profile:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// プロフィール更新
export async function PATCH(
  req: Request,
  { params }: { params: { organizationId: string; clerkId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId || userId !== params.clerkId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { bio, position, department, phoneNumber } = await req.json();

    const updatedProfile = await prisma.organizationProfile.upsert({
      where: {
        clerkId_organizationId: {
          clerkId: params.clerkId,
          organizationId: params.organizationId,
        },
      },
      update: {
        introduction: bio,
        position: position || null,
        department: department || null,
        phoneNumber: phoneNumber || null,
      },
      create: {
        clerkId: params.clerkId,
        organizationId: params.organizationId,
        introduction: bio,
        position: position || null,
        department: department || null,
        phoneNumber: phoneNumber || null,
      },
    });

    return NextResponse.json(updatedProfile);
  } catch (error) {
    console.error('Error in PATCH /api/organization/[organizationId]/members/[clerkId]/profile:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 