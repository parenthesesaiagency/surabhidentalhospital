import { cn } from "@/lib/utils";

export function Marquee({
  children,
  duration = 42,
  gap = 6,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  duration?: number;
  gap?: number;
  className?: string;
  ariaLabel?: string;
}) {
  const track = (
    <div
      className="flex shrink-0 items-center"
      style={{ gap: `${gap * 4}px`, paddingRight: `${gap * 4}px` }}
    >
      {children}
    </div>
  );
  return (
    <div
      className={cn("marquee", className)}
      role="region"
      aria-label={ariaLabel}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee-track">
        {track}
        <div aria-hidden="true">{track}</div>
      </div>
    </div>
  );
}
