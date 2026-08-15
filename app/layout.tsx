import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
} from "@/lib/seo/metadata";
import { content } from "@/lib/data/content";
import { organizationSchema, websiteSchema } from "@/lib/schema/jsonLd";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { MobileActionBar } from "@/components/footer/mobile-action-bar";
import { BookingProvider } from "@/components/booking/booking-provider";
import { Tracker } from "@/components/analytics/tracker";

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

const jsonLd = [organizationSchema(), websiteSchema()]
  .map((schema) => JSON.stringify(schema))
  .map((script) => script.replace(/</g, "\\u003c"))
  .join("\n");

export default function RootLayout({ children }: LayoutProps<"/">) {
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
          <a
            href="#main"
            className="sr-only z-50 rounded-full bg-teal px-5 py-2 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MobileActionBar />
        </BookingProvider>
        <Tracker />
      </body>
    </html>
  );
}
