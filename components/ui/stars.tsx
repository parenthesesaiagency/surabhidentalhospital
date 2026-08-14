import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5 text-teal", className)}
      role="img"
      aria-label="Rated 5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={size} height={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}
