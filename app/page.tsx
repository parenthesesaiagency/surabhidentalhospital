import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { homeKeywords } from "@/lib/seo/keywords";
import { content } from "@/lib/data/content";
import { Hero } from "@/components/hero/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Philosophy } from "@/components/sections/philosophy";
import { TreatmentShowcase } from "@/components/sections/treatment-showcase";
import { WhyDentora } from "@/components/sections/why-dentora";
import { Doctors } from "@/components/sections/doctors";
import { PatientJourney } from "@/components/sections/patient-journey";
import { Reviews } from "@/components/sections/reviews";
import { BeforeAfter } from "@/components/sections/before-after";
import { JaipurSection } from "@/components/sections/jaipur-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { BookingSection } from "@/components/sections/booking-section";

export const metadata: Metadata = buildMetadata({
  title: content.home.title,
  description: content.home.description,
  path: "/",
  keywords: homeKeywords,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Philosophy />
      <TreatmentShowcase />
      <WhyDentora />
      <Doctors />
      <PatientJourney />
      <Reviews />
      <BeforeAfter />
      <JaipurSection />
      <FaqSection />
      <FinalCta />
      <BookingSection />
    </>
  );
}
