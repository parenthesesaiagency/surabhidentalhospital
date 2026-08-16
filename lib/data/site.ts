/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT — single source of truth.
 *
 * Clinic identity, location and contact details live here and nowhere else.
 * Every component and copy string reads from this object, so changing a value
 * below updates the whole site, including metadata and JSON-LD.
 *
 * STILL UNCONFIRMED — verify before launch:
 *   · `hours` are assumed, not supplied by the clinic.
 *   · `contact.whatsappTel` reuses the main number; confirm WhatsApp is active.
 *   · `socials` are empty; they are omitted from schema until set.
 *   · `url` is inferred from the email domain; set NEXT_PUBLIC_SITE_URL to
 *     override once the live domain is confirmed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  /** Short brand used in prose, navigation and headings. */
  name: "Sharda Dental Hospital",
  /** Full registered/listed name — used for JSON-LD and legal copy. */
  legalName: "Sharda Dental Hospital - Dentist Clinic",
  descriptor: "Dental Hospital · Jaipur",
  tagline: "Modern Dentistry. Thoughtfully Delivered.",
  description:
    "Sharda Dental Hospital is a modern dental clinic in Mansarovar, Jaipur offering preventive, cosmetic and restorative dental care in a comfortable, patient-first environment.",
  location: {
    city: "Jaipur",
    state: "Rajasthan",
    country: "IN",
    address: "Shipra Path, Mansarovar Sector 7",
    neighbourhood: "Sector 9, Mansarovar",
    zip: "302020",
    // From the clinic's Google Maps place listing.
    geo: { lat: "26.8503905", lng: "75.7734258" },
  },
  contact: {
    phoneDisplay: "+91 94143 40674",
    phoneTel: "+919414340674",
    whatsappDisplay: "WhatsApp",
    whatsappTel: "+919414340674",
    email: "info@shardadental.com",
  },
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:30 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  mapLink: "https://maps.app.goo.gl/LS4Fou62J9mT6pvB8",
  /**
   * Keyless Google Maps embed pinned to the clinic's coordinates.
   * Coordinates (not a text query) so the pin can't drift to a similarly
   * named business.
   */
  mapEmbed:
    "https://www.google.com/maps?q=26.8503905,75.7734258&z=16&hl=en&output=embed",
  // PLACEHOLDER — set to real social profiles when available.
  socials: {
    instagram: "",
    facebook: "",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shardadental.com",
};

export const navLinks = [
  { label: "Treatments", href: "/services" },
  { label: "Why Choose Us", href: "/#why-dentora" },
  { label: "Our Doctors", href: "/#doctors" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const trustStrip = [
  "Patient-First Care",
  "Advanced Technology",
  "Transparent Treatment Plans",
  "Comfort-First Experience",
] as const;

/**
 * Hero trust indicators.
 * PLACEHOLDER values — replace with verified clinic figures.
 */
export const heroStats: {
  value: string;
  suffix?: string;
  label: string;
}[] = [
  { value: "4.9", suffix: "★", label: "Google Rating" },
  { value: "5000", suffix: "+", label: "Happy Patients" },
  { value: "", suffix: "", label: "Advanced Digital Dentistry" },
];
