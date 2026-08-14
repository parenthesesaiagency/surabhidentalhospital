import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]",
        tone === "light"
          ? "border-line bg-white/70 text-teal-deep"
          : "border-white/15 bg-white/10 text-teal-100",
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-teal" aria-hidden="true" />
      {children}
    </span>
  );
}
