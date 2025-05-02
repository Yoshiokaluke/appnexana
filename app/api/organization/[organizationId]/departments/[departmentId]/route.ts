import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthenticatedUser, checkOrganizationAdmin } from '@/lib/auth/roles';

export async function PATCH(req: NextRequest, { params }: { params: { organizationId: string, departmentId: string } }) {
  const { organizationId, departmentId } = params;
  const user = await getAuthenticatedUser();
  if (!user || !(await checkOrganizationAdmin(user.clerkId, organizationId))) {
    return NextResponse.json({ error: '権限がありません' }, { status: 403 });
  }
  const { name, order } = await req.json();
  if (!name || typeof order !== 'number') {
    return NextResponse.json({ error: '部署名と順序は必須です' }, { status: 400 });
  }
  // 「その他」は編集不可
  const dept = await prisma.organizationDepartment.findUnique({ where: { id: departmentId } });
  if (!dept || dept.name === 'その他') {
    return NextResponse.json({ error: 'この部署は編集できません' }, { status: 400 });
  }
  // 同一組織内で重複禁止
  const exists = await prisma.organizationDepartment.findFirst({
    where: { organizationId, name, NOT: { id: departmentId } },
  });
  if (exists) {
    return NextResponse.json({ error: '同じ名前の部署が既に存在します' }, { status: 409 });
  }
  const updated = await prisma.organizationDepartment.update({
    where: { id: departmentId },
    data: { name, order },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: { organizationId: string, departmentId: string } }) {
  const { organizationId, departmentId } = params;
  const user = await getAuthenticatedUser();
  if (!user || !(await checkOrganizationAdmin(user.clerkId, organizationId))) {
    return NextResponse.json({ error: '権限がありません' }, { status: 403 });
  }
  const dept = await prisma.organizationDepartment.findUnique({ where: { id: departmentId } });
  if (!dept || dept.name === 'その他') {
    return NextResponse.json({ error: 'この部署は削除できません' }, { status: 400 });
  }
  // 使用中の部署は削除不可
  const used = await prisma.organizationProfile.findFirst({ where: { departmentId } });
  if (used) {
    return NextResponse.json({ error: 'この部署は使用中のため削除できません' }, { status: 400 });
  }
  await prisma.organizationDepartment.delete({ where: { id: departmentId } });
  return NextResponse.json({ success: true });
} 