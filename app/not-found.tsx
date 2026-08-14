import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] items-center bg-ink pt-24 text-cream">
      <Container>
        <div className="flex flex-col items-center py-24 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal text-2xl font-extrabold text-white">
            D
          </span>
          <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.3em] text-teal">
            Error 404
          </p>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white">
            This page has left
            <br />
            the building.
          </h1>
          <p className="mt-6 max-w-md text-base leading-[1.7] text-white/60">
            The page you&apos;re looking for may have moved or never existed.
            Let&apos;s get you back to the important stuff.
          </p>
          <div className="mt-10">
            <Button href="/" variant="white">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
