import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="max-w-3xl text-balance text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={0.12}>
          <p className="max-w-xl text-base leading-[1.7] text-muted sm:text-lg">
            {copy}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
