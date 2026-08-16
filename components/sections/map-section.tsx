import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data/site";
import { content } from "@/lib/data/content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Lines } from "@/components/ui/lines";

/**
 * Embedded Google Map.
 *
 * Uses the keyless `output=embed` endpoint pinned to the clinic's coordinates
 * (see `site.mapEmbed`), so there is no API key to provision or leak. The
 * iframe is lazily loaded — it is well below the fold and costs ~1MB otherwise.
 */
export function MapSection() {
  return (
    <section
      id="map"
      aria-label={content.map.sectionAria}
      className="bg-mint pt-8 pb-16 sm:pt-16 sm:pb-32"
    >
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>{content.map.eyebrow}</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
              <Lines lines={content.map.headingLines} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-[1.75] text-muted sm:text-lg">
                {content.map.body}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
              <Button href={site.mapLink} external trackEvent="map_click">
                {content.map.directionsCta}
              </Button>
              <a
                href={`tel:${site.contact.phoneTel}`}
                data-track="phone_click"
                className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-3 text-[15px] font-semibold text-ink transition-all duration-500 ease-apple hover:border-ink/40 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-teal-deep" aria-hidden="true" />
                {content.map.callCta}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_24px_60px_-32px_rgba(7,17,18,0.35)]">
            <iframe
              src={site.mapEmbed}
              title={content.map.frameTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[320px] w-full border-0 sm:h-[420px] lg:h-[480px]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-6 flex items-start gap-2.5 text-sm leading-[1.7] text-muted">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-teal-deep"
              aria-hidden="true"
            />
            <span>
              <span className="font-semibold text-ink">{site.legalName}</span>
              {" — "}
              {content.map.fullAddress}
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
