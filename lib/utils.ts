import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Global motion easing — Apple-style deceleration. */
export const ease = [0.22, 1, 0.36, 1] as const;

export function formatPhone(value: string) {
  return value;
}
