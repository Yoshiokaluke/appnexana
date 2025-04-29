import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { SystemRoleType } from "@/lib/auth/roles";

// 公開ルートの定義
const publicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/organization-list",
  "/qr-scanner-login",
  "/api/webhooks/clerk",
  "/api/users/[userId]",
  "/api/organizations/[organizationId]/members/[userId]"
];

// 無視するルートの定義
const ignoredRoutes = [
  "/qr-scanner",
  "/api/webhooks/clerk",
  "/_next/static",
  "/favicon.ico"
];

const userCache = new Map<string, { systemRole: SystemRoleType | null } | null>();

export const getUserWithCache = async (userId: string) => {
  if (userCache.has(userId)) {
    return userCache.get(userId);
  }
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { systemRole: true }
  });
  userCache.set(userId, user);
  return user;
};

const redirectToSignIn = (req: NextRequest) => {
  return NextResponse.redirect(new URL("/sign-in", req.url));
};

const redirectToOrganizationList = (req: NextRequest) => {
  return NextResponse.redirect(new URL("/organization-list", req.url));
};

const isSystemTeamRoute = (req: NextRequest) => {
  return req.nextUrl.pathname.startsWith("/system-team");
};

const isOrganizationRoute = (req: NextRequest) => {
  return req.nextUrl.pathname.startsWith("/organization");
};

const checkOrganizationAccess = async (userId: string | null, req: NextRequest) => {
  if (!userId) return false;
  const organizationId = req.nextUrl.pathname.split("/")[2];
  const membership = await prisma.organizationMembership.findFirst({
    where: {
      user: { clerkId: userId },
      organizationId,
      role: { in: ['admin', 'member'] }
    }
  });
  return !!membership;
};

export default authMiddleware({
  publicRoutes,
  ignoredRoutes,
  afterAuth(auth, req) {
    const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
    const isIgnoredRoute = ignoredRoutes.some(route => req.nextUrl.pathname.startsWith(route));

    // 無視するルートはそのまま通過
    if (isIgnoredRoute) {
      return NextResponse.next();
    }

    // 未認証ユーザーが保護されたルートにアクセスした場合
    if (!auth.userId && !isPublicRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // 認証済みユーザーがログインページにアクセスした場合
    if (auth.userId && (req.nextUrl.pathname === "/sign-in" || req.nextUrl.pathname === "/sign-up")) {
      return NextResponse.redirect(new URL("/organization-list", req.url));
    }

    return NextResponse.next();
  }
});

// 必要なパスのみをマッチさせる
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};

export const checkSystemTeamAccess = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { systemRole: true }
  });
  return user?.systemRole === 'system_team';
}; 