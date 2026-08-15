import { site } from "@/lib/data/site";

const brand = site.name;
const city = site.location.city;
const neighbourhood = site.location.neighbourhood;

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How do I book an appointment?",
    a: "The fastest way is to call or WhatsApp our team, or use the Book Appointment button — we'll confirm a time that suits you, usually within the same day.",
  },
  {
    q: `Where is ${brand} located in ${city}?`,
    a: `${brand} is located in ${neighbourhood}, ${city}. Use the Get Directions button for the exact location and details on parking.`,
  },
  {
    q: "Do you accept new patients?",
    a: "Yes, we always welcome new patients. Your first visit is a thorough, unhurried consultation where we listen before we treat.",
  },
  {
    q: "How often should I get a dental check-up?",
    a: "For most people, every six months. We'll recommend a personal recall interval based on your gum health, habits and history.",
  },
  {
    q: "How long does a root canal take?",
    a: `Most root canals at ${brand} are completed in a single visit of 60–90 minutes. Complex cases may need two visits — you'll know before we begin.`,
  },
  {
    q: "How much does a dental implant cost?",
    a: "Costs depend on the number of implants, the system used and whether bone grafting is required. We provide a transparent, itemised quote after consultation.",
  },
  {
    q: "Do you offer teeth whitening?",
    a: "Yes. We offer supervised in-clinic whitening and take-home options, always after a check that your teeth and gums are healthy enough.",
  },
  {
    q: "Do you treat children?",
    a: "Yes, we welcome young patients. Our approach is gentle and patient, helping children build positive associations with dental care.",
  },
  {
    q: "What should I do during a dental emergency?",
    a: "Call us immediately — don't wait. For bleeding that won't stop, severe pain or a knocked-out tooth, call our clinic number right away and we'll guide you.",
  },
];
