import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client";

export const prismaDb = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { clerkId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId || userId !== params.clerkId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("[PROFILE_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { clerkId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId || userId !== params.clerkId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      profileImage,
      snsLinks,
    } = body;

    // トランザクションを使用して、UserとProfileの更新を同時に行う
    const result = await db.$transaction(async (tx) => {
      const user = await tx.user.update({
        where: {
          clerkId: userId,
        },
        data: {
          firstName,
          lastName,
          email,
        },
      });

      const profile = await tx.profile.upsert({
        where: {
          clerkId: userId,
        },
        create: {
          clerkId: userId,
          gender,
          birthday: dateOfBirth,
          profileImage,
          snsLinks,
        },
        update: {
          gender,
          birthday: dateOfBirth,
          profileImage,
          snsLinks,
        },
      });

      return { user, profile };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("[PROFILE_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 