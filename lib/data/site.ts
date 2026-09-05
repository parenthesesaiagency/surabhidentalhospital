/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT — single source of truth.
 *
 * Clinic identity, location and contact details live here and nowhere else.
 * Every component and copy string reads from this object, so changing a value
 * below updates the whole site, including metadata and JSON-LD.
 *
 * STILL UNCONFIRMED — verify before launch:
 *   · `hours` follow the clinic's published schedule; re-confirm on request.
 *   · `contact.whatsappTel` reuses the main number; confirm WhatsApp is active.
 *   · `socials.facebook` is the clinic's public page; Instagram not confirmed.
 *   · `url` defaults to the clinic's live domain; NEXT_PUBLIC_SITE_URL wins.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  /** Short brand used in prose, navigation and headings. */
  name: "Surabhi Dental Hospital",
  /** Full registered/listed name — used for JSON-LD and legal copy. */
  legalName: "Surabhi Dental Hospital Implant & Laser Dentistry",
  descriptor: "Dental Hospital · Jaipur",
  tagline: "Implant & Laser Dentistry",
  description:
    "Surabhi Dental Hospital is a dental clinic in Heera Pura, Jaipur offering dental implants, laser dentistry, root canal treatment and complete family dental care — gentle, price-transparent and explained at every step.",
  location: {
    city: "Jaipur",
    state: "Rajasthan",
    country: "IN",
    address: "Dadu Dayal Tower, Jagdamba Nagar-B, Dhawas Road",
    neighbourhood: "Heera Pura",
    zip: "302034",
    // From the clinic's Google Maps place listing.
    geo: { lat: "26.892204", lng: "75.7232731" },
  },
  contact: {
    phoneDisplay: "+91 96808 48986",
    phoneTel: "+919680848986",
    whatsappDisplay: "WhatsApp",
    whatsappTel: "+919680848986",
    email: "dr.sauravgupta24@yahoo.com",
  },
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 2:00 PM · 5:00 PM – 8:30 PM" },
    { day: "Sunday", time: "9:00 AM – 2:00 PM · Evening off" },
  ],
  mapLink: "https://maps.app.goo.gl/uYXyZ8geJp1xk8yAA",
  /**
   * Keyless Google Maps embed pinned to the clinic's coordinates.
   * Coordinates (not a text query) so the pin can't drift to a similarly
   * named business.
   */
  mapEmbed:
    "https://www.google.com/maps?q=26.892204,75.7232731&z=16&hl=en&output=embed",
  // PLACEHOLDER — Instagram not confirmed; Facebook is the clinic's public page.
  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/surabhidentalhospital",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://surabhidentalhospital.com",
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
 * Figures as published by the clinic on its own website and profiles.
 */
export const heroStats: {
  value: string;
  suffix?: string;
  label: string;
}[] = [
  { value: "12", suffix: "+", label: "Years of Experience" },
  { value: "303", suffix: "+", label: "Verified Patient Votes" },
  { value: "", suffix: "", label: "Implant & Laser Dentistry" },
];
