import Image from "next/image";
import { MapPin, Clock, Phone, Car } from "lucide-react";
import { site } from "@/lib/data/site";
import { media } from "@/lib/media";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function JaipurSection() {
  return (
    <section id="location" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy + details */}
          <div>
            <Reveal>
              <Eyebrow>Dentora · Jaipur</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-xl text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
              Modern dentistry,
              <br />
              close to home.
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-[1.75] text-muted sm:text-lg">
                Located in Jaipur, Dentora brings advanced dental care into a
                calm, comfortable environment designed around the patient
                experience — your dentist in Jaipur without the usual stress.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-10 divide-y divide-line border-y border-line">
                <div className="flex items-start gap-4 py-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Address
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {site.location.address}
                      <span className="text-muted"> · {site.location.neighbourhood}</span>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Opening Hours
                    </dt>
                    <dd className="mt-1 space-y-0.5 text-sm font-medium text-ink">
                      {site.hours.map((h) => (
                        <p key={h.day}>
                          {h.day}: <span className="text-muted">{h.time}</span>
                        </p>
                      ))}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Call or WhatsApp
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {site.contact.phoneDisplay}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4">
                  <Car className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Parking
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-muted">
                      [PARKING INFORMATION]
                    </dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button
                  href={site.mapLink}
                  external
                  trackEvent="map_click"
                >
                  Get Directions
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  trackEvent="appointment_click"
                >
                  Book Appointment
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Image + floating map card */}
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                <Image
                  src={media.jaipur.clinic}
                  alt="Inside the calm, modern Dentora dental clinic in Jaipur"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
                />
              </div>

              {/* Floating location card */}
              <div className="float-slow absolute -bottom-8 left-6 flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-24px_rgba(7,17,18,0.35)] sm:left-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-teal-deep">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Dentora</p>
                  <p className="text-xs text-muted">
                    {site.location.neighbourhood} · Jaipur
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
