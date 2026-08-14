import type { Metadata } from "next";
import { site } from "@/lib/data/site";

export const SITE_URL = site.url.replace(/\/$/, "");
export const SITE_NAME = site.name;
export const SITE_DESCRIPTION = site.description;

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  /** Set when the title is already fully branded (e.g. treatment pages). */
  titleAbsent?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  titleAbsent = false,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: titleAbsent ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_IN",
      images: [{ url: `${SITE_URL}/opengraph-image` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
