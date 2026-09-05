"use client";

import { usePathname } from "next/navigation";
import { Tracker } from "@/components/analytics/tracker";

/**
 * App shell aware of the current route. The marketing chrome (navbar, footer,
 * mobile action bar, click/analytics tracker) only renders on public pages;
 * `/dashboard` gets a clean, focused surface instead — no auth, but nothing
 * to distract. Navbar/Footer stay server-rendered and are passed in as props
 * so they never re-mount between navigations.
 */
export function AppShell({
  navbar,
  footer,
  actionBar,
  children,
}: {
  navbar: React.ReactNode;
  footer: React.ReactNode;
  actionBar: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) {
    return (
      <>
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-teal px-5 py-2 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <main id="main">{children}</main>
      </>
    );
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-teal px-5 py-2 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      {navbar}
      <main id="main">{children}</main>
      {footer}
      {actionBar}
      <Tracker />
    </>
  );
}