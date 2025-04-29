// middleware.ts
import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/organization-list",
  "/qr-scanner-login",
  "/api/webhooks/clerk",
  "/api/users/:userId",
  "/api/organizations/:organizationId/members/:userId"
];

const ignoredRoutes = [
  "/qr-scanner",
  "/api/webhooks/clerk",
  "/_next/static",
  "/favicon.ico"
];

export default authMiddleware({
  publicRoutes,
  ignoredRoutes,
  async afterAuth(auth, req: NextRequest) {
    // 未認証かつ非公開ルートへのアクセス時はサインインページへリダイレクト
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // system-teamルートのチェック
    if (req.nextUrl.pathname.startsWith("/system-team")) {
      if (!auth.userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }

      try {
        const apiUrl = `${req.nextUrl.origin}/api/users/${auth.userId}`;
        console.log('Checking system role for URL:', apiUrl);
        
        const res = await fetch(apiUrl);
        const responseText = await res.text();
        console.log('API Response:', responseText);

        if (!res.ok) {
          console.error("Error response from /api/users:", responseText);
          return NextResponse.redirect(new URL("/organization-list", req.url));
        }

        const user = JSON.parse(responseText);
        console.log('Parsed user data:', user);

        if (user?.systemRole !== "system_team") {
          console.log('User does not have system_team role. Current role:', user?.systemRole);
          return NextResponse.redirect(new URL("/organization-list", req.url));
        }

        console.log('User has system_team role, proceeding...');
      } catch (error) {
        console.error("Error checking system role:", error);
        return NextResponse.redirect(new URL("/organization-list", req.url));
      }
    }

    // 組織の管理者専用ルートのチェック
    if (req.nextUrl.pathname.match(/^\/organization\/[^/]+\/(admin|dashboard|scanner-management|organization-role|organization-affiliation|reward|event-purpose)/)) {
      if (!auth.userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }

      try {
        const organizationId = req.nextUrl.pathname.split("/")[2];
        const res = await fetch(`${req.nextUrl.origin}/api/organizations/${organizationId}/members/${auth.userId}`);
        const membership = await res.json();

        if (membership?.role !== "admin") {
          return NextResponse.redirect(new URL(`/organization/${organizationId}`, req.url));
        }
      } catch (error) {
        console.error("Error checking organization role:", error);
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    // 組織メンバーのアクセスチェック（event関連ページなど）
    if (req.nextUrl.pathname.match(/^\/organization\/[^/]+\/(event-|my-qr|create-event)/)) {
      if (!auth.userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }

      try {
        const organizationId = req.nextUrl.pathname.split("/")[2];
        const res = await fetch(`${req.nextUrl.origin}/api/organizations/${organizationId}/members/${auth.userId}`);
        const membership = await res.json();

        if (!membership || !["member", "admin"].includes(membership.role)) {
          return NextResponse.redirect(new URL("/organization-list", req.url));
        }
      } catch (error) {
        console.error("Error checking organization membership:", error);
        return NextResponse.redirect(new URL("/organization-list", req.url));
      }
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