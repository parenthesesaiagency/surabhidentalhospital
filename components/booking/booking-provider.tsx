"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { BookingDialog } from "@/components/booking/booking-dialog";

const BookingContext = createContext<{ open: () => void; close: () => void }>({
  open: () => {},
  close: () => {},
});

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const openDialog = useCallback(() => setOpen(true), []);

  return (
    <BookingContext.Provider value={{ open: openDialog, close }}>
      {children}
      <BookingDialog open={open} onClose={close} />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
