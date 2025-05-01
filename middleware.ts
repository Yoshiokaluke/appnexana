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
  publicRoutes: ["/", "/sign-in", "/sign-up"],
  afterAuth: async (auth, req) => {
    if (!auth.userId && !auth.isPublicRoute) {
      // 未認証の場合、現在のURLをクエリパラメータとして保存
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }

    // 認証済みで組織の招待acceptページの場合は、そのまま処理を続行
    if (auth.userId && req.nextUrl.pathname.includes('/invitation/') && req.nextUrl.pathname.endsWith('/accept')) {
      return NextResponse.next();
    }

    // 認証済みでsign-inまたはsign-upページにいる場合は組織リストにリダイレクト
    if (auth.userId && (req.nextUrl.pathname === '/sign-in' || req.nextUrl.pathname === '/sign-up')) {
      return NextResponse.redirect(new URL('/organization-list', req.url));
    }

    return NextResponse.next();
  },
});

// 必要なパスのみをマッチさせる
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
export const checkSystemTeamAccess = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { systemRole: true }
  });
  return user?.systemRole === 'system_team';
}; 
