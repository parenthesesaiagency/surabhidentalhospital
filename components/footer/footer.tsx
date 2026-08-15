import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { site, navLinks } from "@/lib/data/site";
import { treatments } from "@/lib/data/treatments";
import { Container } from "@/components/ui/container";

const clinicLinks = [
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#book" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Medical Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-28 text-cream md:pb-0">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-[-0.02em] text-white">
                DENTORA
              </span>
              <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-teal">
                Dental Studio · Jaipur
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-white/55">
              {site.tagline}
            </p>
          </div>

          {/* Treatments */}
          <nav aria-label="Treatments">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Treatments
            </h3>
            <ul className="mt-5 space-y-3">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/services/${t.slug}`}
                    data-track="treatment_click"
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Clinic */}
          <nav aria-label="Clinic">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Clinic
            </h3>
            <ul className="mt-5 space-y-3">
              {[...clinicLinks, ...navLinks].filter(
                (link, i, arr) =>
                  arr.findIndex((l) => l.href === link.href) === i,
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Jaipur */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Jaipur
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  {site.location.address}
                  <br />
                  {site.location.neighbourhood}, Jaipur
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phoneTel}`}
                  data-track="phone_click"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  {site.contact.email}
                </a>
              </li>
              <li className="text-white/55">
                {site.hours.map((h) => (
                  <p key={h.day}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dentora Dental Clinic. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
