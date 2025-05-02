import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthenticatedUser, checkOrganizationAdmin } from '@/lib/auth/roles';

// GET: 部署一覧取得
export async function GET(req: NextRequest, { params }: { params: { organizationId: string } }) {
  try {
    const { organizationId } = params;
    console.log('組織ID:', organizationId);

    const user = await getAuthenticatedUser();
    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    console.log('認証ユーザー:', user);

    const isAdmin = await checkOrganizationAdmin(user.clerkId, organizationId);
    console.log('isAdmin:', isAdmin);

    if (!isAdmin) {
      console.log('管理者権限がありません');
      return NextResponse.json({ error: '権限がありません' }, { status: 403 });
    }

    const departments = await prisma.organizationDepartment.findMany({
      where: { organizationId },
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(departments);
  } catch (error) {
    console.error('部署一覧取得エラー:', error);
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 });
  }
}

// POST: 部署追加
export async function POST(req: NextRequest, { params }: { params: { organizationId: string } }) {
  const { organizationId } = params;
  const user = await getAuthenticatedUser();
  if (!user || !(await checkOrganizationAdmin(user.clerkId, organizationId))) {
    return NextResponse.json({ error: '権限がありません' }, { status: 403 });
  }
  const { name, order } = await req.json();
  if (!name || typeof order !== 'number') {
    return NextResponse.json({ error: '部署名と順序は必須です' }, { status: 400 });
  }
  // 同一組織内で重複禁止
  const exists = await prisma.organizationDepartment.findFirst({
    where: { organizationId, name },
  });
  if (exists) {
    return NextResponse.json({ error: '同じ名前の部署が既に存在します' }, { status: 409 });
  }
  const department = await prisma.organizationDepartment.create({
    data: { organizationId, name, order },
  });
  return NextResponse.json(department, { status: 201 });
} 