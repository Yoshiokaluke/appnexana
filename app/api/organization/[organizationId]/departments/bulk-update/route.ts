import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthenticatedUser, checkOrganizationAdmin } from '@/lib/auth/roles';

export async function PATCH(
  req: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const { organizationId } = params;
    const user = await getAuthenticatedUser();
    
    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const isAdmin = await checkOrganizationAdmin(user.clerkId, organizationId);
    if (!isAdmin) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const departments = await req.json();

    // トランザクションで一括更新
    await prisma.$transaction(
      departments.map((department: { id: string; order: number }) =>
        prisma.organizationDepartment.update({
          where: { id: department.id },
          data: { order: department.order },
        })
      )
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('部署一括更新エラー:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 