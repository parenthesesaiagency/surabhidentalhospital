import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "white" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-cream hover:bg-ink-soft focus-visible:outline-ink",
  white: "bg-white text-ink hover:bg-cream focus-visible:outline-white",
  outline:
    "border border-ink/15 text-ink hover:border-ink/40 focus-visible:outline-ink",
  "outline-light":
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5 focus-visible:outline-white",
  ghost: "text-ink hover:text-teal-deep",
};

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-5 py-2 text-[13px]",
  md: "min-h-12 px-6 py-2.5 text-sm",
  lg: "min-h-14 px-7 py-3 text-[15px]",
};

const iconCircle: Record<Variant, string> = {
  primary: "bg-white/10 text-white",
  white: "bg-ink/8 text-ink",
  outline: "bg-ink/6 text-ink",
  "outline-light": "bg-white/10 text-white",
  ghost: "bg-teal/10 text-teal-deep",
};

export type ButtonProps = {
  href?: string;
  external?: boolean;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  children: React.ReactNode;
  trackEvent?: string;
  trackProps?: Record<string, string>;
  ariaLabel?: string;
} & React.ComponentProps<"a" | "button">;

function ButtonInner({
  variant,
  icon,
  children,
}: {
  variant: Variant;
  icon: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <span className="truncate">{children}</span>
      {icon && (
        <span
          aria-hidden="true"
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-apple group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            iconCircle[variant],
          )}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </span>
      )}
    </>
  );
}

export function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  children,
  trackEvent,
  trackProps,
  ariaLabel,
  ...rest
}: ButtonProps) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-500 ease-apple active:scale-[0.98]",
    variant !== "ghost" && "pl-6 pr-2",
    variant === "ghost" && "gap-1.5",
    sizes[size],
    variants[variant],
    className,
  );

  const track = trackEvent
    ? {
        "data-track": trackEvent,
        ...(trackProps ? { "data-track-props": JSON.stringify(trackProps) } : {}),
      }
    : {};

  if (href) {
    const anchorProps = {
      className: cls,
      ...track,
      ...rest,
    } as unknown as Omit<React.ComponentProps<"a">, "href" | "target" | "rel">;
    const linkProps = {
      className: cls,
      ...track,
      ...rest,
    } as unknown as Omit<React.ComponentProps<typeof Link>, "href">;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          {...anchorProps}
        >
          <ButtonInner variant={variant} icon={icon}>
            {children}
          </ButtonInner>
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} {...linkProps}>
        <ButtonInner variant={variant} icon={icon}>
          {children}
        </ButtonInner>
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      {...(rest as unknown as React.ComponentProps<"button">)}
      {...track}
      className={cls}
    >
      <ButtonInner variant={variant} icon={icon}>
        {children}
      </ButtonInner>
    </button>
  );
}
