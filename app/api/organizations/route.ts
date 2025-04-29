import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, address, managerName } = await req.json()
    
    const organization = await prisma.organization.create({
      data: {
        name,
        address,
        managerName
      }
    })
    
    return NextResponse.json(organization)
  } catch (error) {
    console.error('Error creating organization:', error)
    return NextResponse.json(
      { error: '組織の作成に失敗しました' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const organizations = await prisma.organization.findMany()
    return NextResponse.json(organizations)
  } catch (error) {
    console.error('Error fetching organizations:', error)
    return NextResponse.json(
      { error: '組織一覧の取得に失敗しました' },
      { status: 500 }
    )
  }
} 