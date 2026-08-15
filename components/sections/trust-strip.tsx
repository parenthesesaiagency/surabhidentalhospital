import { trustStrip, site } from "@/lib/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-white" aria-label={`Why patients choose ${site.name}`}>
      <Container>
        <Reveal>
          <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-7">
            {trustStrip.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/70 sm:text-[13px]"
              >
                <span
                  aria-hidden="true"
                  className={
                    i === 0 ? "h-1.5 w-1.5 rounded-full bg-teal" : "hidden"
                  }
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
