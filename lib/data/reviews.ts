/**
 * Reviews — PLACEHOLDER content for development.
 *
 * Replace with verified Google reviews (with permission) before launch.
 * Names are placeholders; do not publish invented patient testimonials.
 */

export type Review = {
  name: string;
  initials: string;
  text: string;
  treatment?: string;
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Reviewer Name",
    initials: "R",
    text: "[Placeholder — replace with a verified patient review. e.g. Booking was effortless and the team explained every step before starting. Genuinely the calmest dental visit I've had in Jaipur.]",
    treatment: "Teeth Cleaning",
    featured: true,
  },
  {
    name: "Reviewer Name",
    initials: "R",
    text: "[Placeholder patient review.]",
    treatment: "Root Canal",
  },
  {
    name: "Reviewer Name",
    initials: "R",
    text: "[Placeholder patient review.]",
    treatment: "Dental Implant",
  },
  {
    name: "Reviewer Name",
    initials: "R",
    text: "[Placeholder patient review.]",
    treatment: "Smile Makeover",
  },
  {
    name: "Reviewer Name",
    initials: "R",
    text: "[Placeholder patient review.]",
    treatment: "Teeth Whitening",
  },
];
