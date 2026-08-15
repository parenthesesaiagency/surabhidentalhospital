/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BUSINESS CONTENT — every piece of marketing copy in one place.
 *
 * This file powers the whole site. To white-label it for another clinic,
 * edit `site.ts` (name, location, contact, hours, links) and then come here
 * to refresh the copy. Brand names and city names are already wired to
 * `site.ts`, so most sentences update themselves automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { site } from "@/lib/data/site";
import { media } from "@/lib/media";

const brand = site.name;
const city = site.location.city;

export const content = {
  /* ─────────────────────────── Brand ─────────────────────────── */

  brand: {
    wordmark: site.name.toUpperCase(),
    descriptor: site.descriptor,
    ariaLabel: `${site.name} — home`,
  },

  /* Shared "Modern Dental Clinic in <city>" descriptor used by metadata & OG. */
  clinicTitle: `Modern Dental Clinic in ${city}`,

  /* ─────────────────────────── Home page metadata ─────────────────────────── */

  home: {
    title: `${site.name} — Modern Dental Clinic in ${city}`,
    description: `${site.name} is a modern dental clinic in ${city} offering preventive, cosmetic and restorative dentistry in a calm, patient-first environment. Book your consultation today.`,
  },

  /* ─────────────────────────── Nav / shared CTAs ─────────────────────────── */

  nav: {
    bookCta: "Book Appointment",
  },

  /* ─────────────────────────── Open Graph image ─────────────────────────── */

  ogImage: {
    /** Two lines for the big OG headline; edit freely. */
    line1: "Modern dentistry.",
    line2: "Thoughtfully delivered.",
    /** Single-letter brand mark. */
    mark: site.name.charAt(0),
  },

  /* ─────────────────────────── Hero ─────────────────────────── */

  hero: {
    ariaLabel: `${brand} — premium dental care in ${city}`,
    badge: `Premium Dental Care · ${city}`,
    headline: "A better smile starts with better care.",
    highlightWords: ["better", "care."],
    subtext: `Advanced dentistry, experienced specialists, and a calmer approach to your oral health — all under one roof in ${city}.`,
    primaryCta: { label: "Book Appointment", href: "/#book" },
    secondaryCta: { label: "Explore Treatments", href: "/services" },
    imageAlt: `Modern dental treatment suite at ${brand}, ${city}`,
  },

  /* ─────────────────────────── Philosophy ─────────────────────────── */

  philosophy: {
    eyebrow: "Our Approach",
    heading: "Dentistry should feel less intimidating.",
    headingHighlight: ["intimidating."],
    body: `From your first consultation to your final follow-up, every part of your experience at ${brand} is designed to feel clear, comfortable and personal.`,
    points: [
      "We explain before we treat — never the other way around.",
      "Treatment plans are transparent, itemised and unhurried.",
      "Comfort is engineered into every visit, not bolted on.",
    ],
    imageAlt: `A calm, modern treatment room at ${brand} dental clinic in ${city}`,
    imageAltSecondary: `Close detail of modern dental equipment in the ${brand} clinic`,
  },

  /* ─────────────────────────── Why Dentora ─────────────────────────── */

  why: {
    eyebrow: `Why ${brand}`,
    headingLines: ["Care that puts", "you first."],
    body: `Four commitments shape every visit at ${brand} — from the reception desk to the dentist chair.`,
    pillars: [
      {
        title: "Experienced Care",
        copy: "A team that listens first and treats second — with a calm, experienced hand in every discipline.",
      },
      {
        title: "Modern Technology",
        copy: "Digital X-rays, rotary endodontics and modern equipment for safer, faster, more comfortable care.",
      },
      {
        title: "Clear Treatment Plans",
        copy: "Itemised, transparent plans in plain language. You always know what, why and how much — before we begin.",
      },
      {
        title: "Comfort-First Experience",
        copy: "A calm clinic designed around you, from the first call to the final follow-up. No rush, no jargon.",
      },
    ],
  },

  /* ─────────────────────────── Treatment showcase ─────────────────────────── */

  treatmentsSection: {
    eyebrow: "Treatments",
    heading: "The right care, chosen by you.",
    viewAll: "View all treatments",
    learnMore: "Learn more",
    viewBadge: "View",
  },

  /* ─────────────────────────── Patient journey ─────────────────────────── */

  journey: {
    eyebrow: "Your Journey",
    heading: "From first visit to confident smile.",
    headingLines: ["From first visit", "to confident smile."],
    ariaLabel: `The patient journey — from first visit to confident smile`,
    stages: [
      {
        n: "01",
        title: "Consultation",
        copy: "We start with a conversation. You tell us what's bothering you — or what you're hoping to improve — and we listen before we look.",
        image: media.journey[0],
        alt: `A relaxed first consultation with a dentist at ${brand}, ${city}`,
      },
      {
        n: "02",
        title: "Diagnosis",
        copy: "A careful examination, supported by digital imaging, reveals the full picture. You'll understand your oral health in plain language — no jargon.",
        image: media.journey[1],
        alt: `Detailed dental diagnosis with digital imaging at ${brand}`,
      },
      {
        n: "03",
        title: "Treatment",
        copy: "If treatment is needed, it's delivered gently and exactly as explained. You stay informed at every step and never feel rushed.",
        image: media.journey[2],
        alt: `Comfortable dental treatment in progress at ${brand}`,
      },
      {
        n: "04",
        title: "Aftercare",
        copy: "Care doesn't end when you leave the chair. We follow up, guide your recovery and help you keep your results for years to come.",
        image: media.journey[3],
        alt: `Friendly follow-up and aftercare guidance at ${brand}`,
      },
    ],
  },

  /* ─────────────────────────── Reviews ─────────────────────────── */

  reviews: {
    eyebrow: "Reviews",
    headingLines: ["Trusted by patients", `across ${city}.`],
    googleLabel: "Google Review",
    verifiedLabel: "Verified patient",
    marqueeAria: "More patient reviews",
  },

  /* ─────────────────────────── Before / After ─────────────────────────── */

  beforeAfter: {
    eyebrow: "Real Results",
    headingLines: ["See the difference,", "honestly presented."],
    beforeLabel: "Before",
    afterLabel: "After",
    resultsNote: "Individual results vary.",
  },

  /* ─────────────────────────── Jaipur / location ─────────────────────────── */

  jaipur: {
    eyebrow: `${brand} · ${city}`,
    headingLines: ["Modern dentistry,", "close to home."],
    body: `Located in ${city}, ${brand} brings advanced dental care into a calm, comfortable environment designed around the patient experience — your dentist in ${city} without the usual stress.`,
    labels: {
      address: "Address",
      hours: "Opening Hours",
      contact: "Call or WhatsApp",
      parking: "Parking",
    },
    parkingInfo: "[PARKING INFORMATION]",
    directionsCta: "Get Directions",
    bookCta: "Book Appointment",
    imageAlt: `Inside the calm, modern ${brand} dental clinic in ${city}`,
    floatingCardSub: `${site.location.neighbourhood} · ${city}`,
  },

  /* ─────────────────────────── FAQ ─────────────────────────── */

  faq: {
    eyebrow: "FAQ",
    headingLines: ["Common questions,", "honest answers."],
    body: "Can't find what you're looking for? Our team is one call or message away.",
    cta: "Ask us anything",
  },

  /* ─────────────────────────── Final CTA ─────────────────────────── */

  finalCta: {
    eyebrow: "Book a Visit",
    headingLines: ["Ready to take care", "of your smile?"],
    body: "Book a consultation with our team and take the first step toward better dental health.",
    bookCta: "Book Appointment",
    callCta: "Call the Clinic",
    whatsappCta: "WhatsApp Us",
  },

  /* ─────────────────────────── Booking section ─────────────────────────── */

  booking: {
    sectionAria: "Book an appointment",
    eyebrow: "Book an Appointment",
    heading: "Your appointment is just a few details away.",
    body: "Fill in the form and our team will call you to confirm. Prefer to reach out another way? We're always happy to help.",
    hoursTitle: "Opening Hours",
    options: [
      {
        key: "phone",
        label: "Call us",
        value: site.contact.phoneDisplay,
        note: `Mon–Sat, ${site.hours[0].time}`,
        href: `tel:${site.contact.phoneTel}`,
        external: false,
        track: "phone_click",
      },
      {
        key: "whatsapp",
        label: "WhatsApp",
        value: "Chat with our team",
        note: "Fastest way to book",
        href: `https://wa.me/${site.contact.whatsappTel.replace("+", "")}`,
        external: true,
        track: "whatsapp_click",
      },
      {
        key: "email",
        label: "Email",
        value: site.contact.email,
        note: "We reply within one working day",
        href: `mailto:${site.contact.email}`,
        external: false,
        track: "appointment_click",
      },
      {
        key: "map",
        label: "Visit the clinic",
        value: `${site.location.address}, ${site.location.neighbourhood}`,
        note: "Parking available nearby",
        href: site.mapLink,
        external: true,
        track: "map_click",
      },
    ],
  },

  /* ─────────────────────────── Doctors ─────────────────────────── */

  doctors: {
    eyebrow: "Our Doctors",
    headingLines: ["The team behind", "your smile."],
    cta: "About the clinic",
    photoAlt: (name: string) =>
      `Portrait of ${name} — placeholder, replace with verified photo`,
  },

  /* ─────────────────────────── Footer ─────────────────────────── */

  footer: {
    headings: { treatments: "Treatments", clinic: "Clinic", city },
    clinicLinks: [
      { label: "About", href: "/about" },
      { label: "Doctors", href: "/#doctors" },
      { label: "Reviews", href: "/#reviews" },
      { label: "Contact", href: "/#book" },
      { label: "FAQ", href: "/#faq" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Medical Disclaimer", href: "/disclaimer" },
    ],
    copyright: `© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`,
  },

  /* ─────────────────────────── About page ─────────────────────────── */

  about: {
    heroEyebrow: `About ${brand}`,
    heroHeadingLines: ["A calmer way to", "care for your smile."],
    heroBody: `${site.tagline} — ${site.description}`,
    storyEyebrow: "Our story",
    storyHeadingLines: ["Dentistry that treats you", "like a person, not a procedure."],
    storyParagraphs: [
      `${brand} was founded in ${city} on a simple belief: most people don't avoid the dentist because of the treatment — they avoid it because of the experience. Too many clinics are rushed, intimidating and unclear about what's happening and what it costs.`,
      `We built the clinic we'd want our own families to visit — a calm, modern space where the team listens first, explains everything in plain language, and never recommends treatment you don't need.`,
      `Whether you're visiting for the first time in years or planning a complete smile makeover, you'll always know exactly where you stand — and exactly what comes next.`,
    ],
    storyImageAlt: `The calm, modern interior of ${brand} dental clinic in ${city}`,
    floatingCardSub: `Dental Studio · ${city}`,
    spaceEyebrow: "The space",
    spaceHeading: "Designed to feel nothing like a clinic.",
    spaceImageAlt: `Placeholder interior photograph — replace with real ${brand} clinic photography`,
    valuesEyebrow: "What we stand for",
    valuesHeading: "Four promises, kept on every visit.",
    values: [
      {
        key: "patient",
        title: "Patient-First",
        body: "Every decision — from treatment plans to timings — is made with your comfort and best interest first.",
      },
      {
        key: "honest",
        title: "Honest Advice",
        body: "We tell you what can wait as honestly as what can't. Nothing is recommended that isn't genuinely needed.",
      },
      {
        key: "pricing",
        title: "Transparent Pricing",
        body: "Itemised, clear plans before treatment begins. No surprise charges, ever.",
      },
      {
        key: "comfort",
        title: "Comfort-First",
        body: "A calm, modern space and a gentle team — built for people who don't like dental visits.",
      },
    ],
  },

  /* ─────────────────────────── Services page ─────────────────────────── */

  services: {
    title: `Dental Treatments in ${city}`,
    description: `Explore the full range of dental treatments at ${brand}, ${city} — check-ups, cleaning, root canals, implants, whitening, veneers and more.`,
    heroEyebrow: "Treatments",
    heroHeadingLines: ["Care that fits", "your life."],
    heroBody: `From a routine check-up to a complete smile makeover, every treatment at ${brand} is explained clearly, priced transparently and delivered with a patient-first approach.`,
    learnMore: "Learn more",
    seoHeading: `Your trusted dental clinic in ${city}`,
    seoBody: `Whatever brings you in — a routine check-up, a nagging toothache or a smile you've been planning for years — our team in ${city} will take the time to understand your needs and build a plan that's genuinely yours. Every treatment is explained before we begin, and every recommendation is made with your best interest in mind.`,
  },

  /* ─────────────────────────── Treatment detail page ─────────────────────────── */

  treatmentPage: {
    overview: "Overview",
    whoItsFor: "This may be right for you if…",
    whatToExpect: "What to expect",
    benefits: "Benefits",
    recovery: "Recovery & aftercare",
    bookConsultation: "Book a Consultation",
    viewAll: "View all treatments",
    faq: "FAQ",
    relatedEyebrow: "Explore more",
    relatedHeading: "You may also consider",
  },

  /* ─────────────────────────── Blog page ─────────────────────────── */

  blog: {
    title: "Dental Journal",
    description: `Practical, medically responsible articles on dental health from the ${brand} team in ${city} — from cleaning routines to choosing the right treatment.`,
    heroEyebrow: "Journal",
    heroHeadingLines: ["Dental health,", "in plain language."],
    heroBody: "Practical, honest guidance from our team — written to be useful, not alarming.",
    readMore: "Read article",
  },

  /* ─────────────────────────── Booking form ─────────────────────────── */

  bookingForm: {
    eyebrow: "Book an Appointment",
    dialogLabel: "Book an appointment",
    heading: "Reserve your visit",
    body: "Fill in your details and we'll confirm by phone.",
    labels: { name: "Full name", phone: "Mobile number", date: "Preferred date" },
    placeholders: { name: "e.g. Aarav Sharma", phone: "98765 43210" },
    errors: {
      name: "Please enter your name.",
      phone: "Enter a valid 10-digit mobile number.",
      dateRequired: "Please pick a date.",
      datePast: "Date can't be in the past.",
    },
    phoneCode: "+91",
    submit: "Confirm Booking",
    footnote: "No payment needed today — we'll call you to confirm.",
    successHeading: "Request received!",
    successBody: (name: string, phone: string, dateLabel: string) =>
      `Thank you, ${name}. We'll call +91 ${phone} to confirm your visit on ${dateLabel}.`,
    bookAnother: "Book another",
  },
} as const;
