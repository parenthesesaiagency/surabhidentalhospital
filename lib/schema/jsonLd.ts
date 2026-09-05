import type { Treatment } from "@/lib/data/treatments";
import type { Faq } from "@/lib/data/faqs";
import { site } from "@/lib/data/site";

/**
 * JSON-LD builders.
 * Structured data is only emitted for fields backed by real, verified data.
 * Placeholder values are kept out of the markup until they are confirmed.
 */

const url = site.url.replace(/\/$/, "");

/**
 * Serialise schemas into the body of a single `application/ld+json` script.
 *
 * Everything goes into one `@graph` under one `@context`. Emitting several
 * bare objects back-to-back in a single script tag is not valid JSON, so
 * parsers reject the whole block — hence a single wrapper here rather than
 * joining `JSON.stringify` output at each call site.
 */
export function jsonLdScript(...schemas: object[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemas,
  }).replace(/</g, "\\u003c");
}

const areaServed = () => ({
  "@type": "City" as const,
  name: site.location.city,
});

const areaServedRegion = () => ({
  "@type": "State" as const,
  name: site.location.state,
});

function clinicAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: `${site.location.address}, ${site.location.neighbourhood}`,
    addressLocality: site.location.city,
    addressRegion: site.location.state,
    postalCode: site.location.zip,
    addressCountry: site.location.country,
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization" as const,
    name: site.legalName,
    url,
    description: site.description,
    logo: `${url}/icon`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phoneTel,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite" as const,
    name: site.legalName,
    url,
    publisher: { "@type": "Organization" as const, name: site.legalName },
  };
}

/** Combined LocalBusiness / MedicalBusiness / Dentist schema. */
export function dentistSchema() {
  const hasGeo = Boolean(site.location.geo.lat && site.location.geo.lng);
  return {
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"] as const,
    name: site.legalName,
    url,
    description: site.description,
    telephone: site.contact.phoneTel,
    email: site.contact.email,
    priceRange: "₹₹",
    address: clinicAddress(),
    ...(hasGeo
      ? {
          geo: {
            "@type": "GeoCoordinates" as const,
            latitude: site.location.geo.lat,
            longitude: site.location.geo.lng,
          },
        }
      : {}),
    // Matches the clinic's published schedule: two daily sessions.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: [areaServed(), areaServedRegion()],
    sameAs: [site.socials.instagram, site.socials.facebook].filter(Boolean),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@type": "FAQPage" as const,
    mainEntity: items.map((f) => ({
      "@type": "Question" as const,
      name: f.q,
      acceptedAnswer: { "@type": "Answer" as const, text: f.a },
    })),
  };
}

export function treatmentSchema(t: Treatment) {
  return {
    "@type": ["MedicalProcedure", "MedicalService"] as const,
    name: t.name,
    description: t.overview,
    image: t.image,
    url: `${url}/services/${t.slug}`,
    provider: { "@type": "Dentist" as const, name: site.legalName, url },
    areaServed: areaServed(),
  };
}
