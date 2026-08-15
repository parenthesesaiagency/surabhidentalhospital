"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useBooking } from "@/components/booking/booking-provider";

export function BookButton(props: ButtonProps) {
  const { open: openBooking } = useBooking();
  return (
    <Button
      {...props}
      onClick={(e: React.MouseEvent) => {
        if (window.innerWidth < 1024) {
          e.preventDefault();
          openBooking();
        }
      }}
    />
  );
}
