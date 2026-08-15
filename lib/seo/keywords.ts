/** Local SEO keywords — used as metadata keywords only; never stuffed into copy. */

import { site } from "@/lib/data/site";

const city = site.location.city;

export const homeKeywords = [
  `dentist in ${city}`,
  `best dentist in ${city}`,
  `dental clinic in ${city}`,
  `best dental clinic ${city}`,
  `teeth cleaning ${city}`,
  `root canal treatment ${city}`,
  `dental implants ${city}`,
  `cosmetic dentist ${city}`,
  `teeth whitening ${city}`,
];

export const treatmentKeywords: Record<string, string[]> = {
  "dental-checkup": [`dental check-up ${city}`, `general dentist ${city}`, `preventive dentistry ${city}`],
  "teeth-cleaning": [`teeth cleaning ${city}`, `dental scaling ${city}`, `teeth polishing ${city}`],
  "root-canal": [`root canal ${city}`, "RCT", `painless root canal ${city}`],
  "dental-implants": [`dental implants ${city}`, `tooth implant ${city}`, `implant dentist ${city}`],
  "teeth-whitening": [`teeth whitening ${city}`, `professional whitening ${city}`, `smile brightening ${city}`],
  veneers: [`veneer ${city}`, `porcelain veneers ${city}`, `cosmetic dentistry ${city}`],
  "crowns-bridges": [`dental crown ${city}`, `dental bridge ${city}`, `restorative dentistry ${city}`],
  "smile-makeover": [`smile makeover ${city}`, `smile design ${city}`, `cosmetic dentist ${city}`],
};

export const serviceKeywords = [
  `dental treatments ${city}`,
  "dentist near me",
  "dental clinic near me",
];
