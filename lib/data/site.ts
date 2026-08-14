/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT — single source of truth.
 *
 * Everything below is a PLACEHOLDER and is intentionally trivial to replace.
 * Swap the bracketed values for real clinic data when it becomes available.
 *
 *   [CLINIC ADDRESS]   [NEIGHBOURHOOD]   [PHONE NUMBER]   [WHATSAPP NUMBER]
 *   [EMAIL ADDRESS]    [MAP LINK]
 *
 * The site renders cleanly with placeholders in place.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Dentora",
  legalName: "Dentora Dental Clinic",
  descriptor: "Dental Studio · Jaipur",
  tagline: "Modern Dentistry. Thoughtfully Delivered.",
  description:
    "Dentora is a modern dental clinic in Jaipur offering preventive, cosmetic and restorative dental care in a comfortable, patient-first environment.",
  location: {
    city: "Jaipur",
    state: "Rajasthan",
    country: "IN",
    // PLACEHOLDER
    address: "[CLINIC ADDRESS]",
    neighbourhood: "[NEIGHBOURHOOD, JAIPUR]",
    zip: "[PIN CODE]",
    // Leave empty until real geo coordinates are confirmed.
    geo: { lat: "", lng: "" },
  },
  contact: {
    // PLACEHOLDER — use E.164 without spaces, e.g. +919XXXXXXXXX
    phoneDisplay: "+91 00000 00000",
    phoneTel: "+919000000000",
    whatsappDisplay: "WhatsApp",
    whatsappTel: "+919000000000",
    email: "care@dentorajaipur.in",
  },
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:30 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  // PLACEHOLDER — replace with a real Google Maps link when the address is set.
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Dentora+Dental+Clinic+Jaipur",
  // PLACEHOLDER — set to real social profiles when available.
  socials: {
    instagram: "",
    facebook: "",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dentora.in",
};

export const navLinks = [
  { label: "Treatments", href: "/services" },
  { label: "Why Dentora", href: "/#why-dentora" },
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
