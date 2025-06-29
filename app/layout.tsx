'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { AuthSync } from './components/auth/AuthSync'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      afterSignInUrl="/organization-list"
      afterSignUpUrl="/organization-list"
    >
      <html lang="ja" className={inter.className}>
        <body>
          <AuthSync />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
