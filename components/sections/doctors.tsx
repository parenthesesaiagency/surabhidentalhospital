import Image from "next/image";
import { doctors } from "@/lib/data/doctors";
import { content } from "@/lib/data/content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Lines } from "@/components/ui/lines";

export function Doctors() {
  return (
    <section id="doctors" className="bg-white pt-8 pb-16 sm:pt-16 sm:pb-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>{content.doctors.eyebrow}</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
              <Lines lines={content.doctors.headingLines} />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <Button
              href="/about"
              variant="outline"
              trackEvent="doctor_profile_click"
            >
              {content.doctors.cta}
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.id} delay={i * 0.08} className="lg:col-span-2">
              <article className="group">
                <div className="grid gap-8 sm:grid-cols-[minmax(0,320px)_1fr] sm:gap-10 lg:gap-14">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={doctor.photo}
                      alt={content.doctors.photoAlt(doctor.name)}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold tracking-[-0.01em] text-ink">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-muted">
                      {doctor.qualification}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-teal-deep">
                      {doctor.specialty}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-[1.7] text-muted">
                      {doctor.bio}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
