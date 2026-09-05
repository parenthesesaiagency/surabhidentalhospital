import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
} from "@/lib/seo/metadata";
import { content } from "@/lib/data/content";
import {
  organizationSchema,
  websiteSchema,
  dentistSchema,
  jsonLdScript,
} from "@/lib/schema/jsonLd";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { MobileActionBar } from "@/components/footer/mobile-action-bar";
import { BookingProvider } from "@/components/booking/booking-provider";
import { AppShell } from "@/components/layout/app-shell";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${content.clinicTitle}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — ${content.clinicTitle}`,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${content.clinicTitle}`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

/**
 * Site-wide structured data. `dentistSchema` carries the clinic's name,
 * address, geo, phone and opening hours — the local-SEO payload — so it
 * belongs on every page alongside the organisation and website entries.
 */
const jsonLd = jsonLdScript(
  organizationSchema(),
  websiteSchema(),
  dentistSchema(),
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body>
        <BookingProvider>
          <AppShell
            navbar={<Navbar />}
            footer={<Footer />}
            actionBar={<MobileActionBar />}
          >
            {children}
          </AppShell>
        </BookingProvider>
      </body>
    </html>
  );
}
