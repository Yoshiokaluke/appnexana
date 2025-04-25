// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware({
  async beforeAuth(req) {
    // Handle any custom logic before authentication runs
    return NextResponse.next();
  },
  async afterAuth(auth, req) {
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
        const res = await fetch(`${req.nextUrl.origin}/api/users/${auth.userId}`);
        if (!res.ok) {
          console.error("Error response from /api/users:", await res.text());
          return NextResponse.redirect(new URL("/organization-list", req.url));
        }
        const user = await res.json();

        if (user?.systemRole !== "system_team") {
          return NextResponse.redirect(new URL("/organization-list", req.url));
        }
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

        // memberまたはadmin権限がない場合はorganization-listにリダイレクト
        if (!membership || !["member", "admin"].includes(membership.role)) {
          return NextResponse.redirect(new URL("/organization-list", req.url));
        }
      } catch (error) {
        console.error("Error checking organization membership:", error);
        return NextResponse.redirect(new URL("/organization-list", req.url));
      }
    }

    return NextResponse.next();
  },
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/organization-list",  // organization-listを公開ルートに追加
    "/qr-scanner-login",  // QRスキャナー用ログインページ
    "/api/webhooks/clerk",
    "/api/users/:userId",
    "/api/organizations/:organizationId/members/:userId"
  ],
  ignoredRoutes: [
    "/qr-scanner/**",     // QRスキャナー関連のルートは別認証を使用
    "/api/webhooks/clerk",
    "/_next/static/(.*)",
    "/favicon.ico"
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};