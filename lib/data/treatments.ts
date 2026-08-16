import { img } from "@/lib/media";
import { site } from "@/lib/data/site";

/** Brand name is wired to `site.ts` so a rename never leaves stragglers here. */
const brand = site.name;

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  whoItsFor: string[];
  procedure: { title: string; body: string }[];
  benefits: string[];
  recovery: string;
  faqs: { q: string; a: string }[];
  related: string[];
  local: string;
};

export const treatments: Treatment[] = [
  {
    slug: "dental-checkup",
    name: "General Dentistry",
    short: "Comprehensive exams and preventive care, starting with a gentle conversation about your concerns.",
    overview:
      `A thorough dental check-up in Jaipur is the foundation of long-term oral health. At ${brand}, every consultation starts with listening — then a detailed examination of your teeth, gums and supporting structures, followed by a clear, honest summary of what we found and what we recommend. Nothing is done without your understanding first.`,
    image: img(3952124),
    imageAlt:
      `Dentist performing a routine dental examination at ${brand} dental clinic in Jaipur`,
    seoTitle: `Dental Check-up in Jaipur | General Dentistry | ${brand}`,
    seoDescription:
      `Preventive dental check-ups in Jaipur at ${brand} — gentle, thorough exams, honest advice and early problem detection from an experienced dental team.`,
    whoItsFor: [
      "Anyone who hasn't seen a dentist in over six months",
      "Families looking for a single trusted dental clinic in Jaipur",
      "Patients with a history of gum disease or decay",
      "First-time visitors who are nervous about dental visits",
    ],
    procedure: [
      {
        title: "Conversation & history",
        body: "We begin by understanding your concerns, habits and medical history so your care is tailored to you — not a checklist.",
      },
      {
        title: "Clinical examination",
        body: "Your teeth, gums, bite and soft tissues are examined carefully, supported by digital X-rays where needed.",
      },
      {
        title: "Clear explanation",
        body: "You'll leave understanding exactly what we found, what can wait and what deserves attention — in plain language.",
      },
      {
        title: "A plan you control",
        body: "If treatment is needed, you'll receive a transparent, itemised plan. You decide what happens next, on your terms.",
      },
    ],
    benefits: [
      "Problems are caught early, before they become painful or expensive",
      "Professional cleaning removes plaque you can't reach at home",
      "Peace of mind from knowing your oral health clearly",
      "A trusted relationship for the whole family in Jaipur",
    ],
    recovery:
      "No recovery time is needed after a standard check-up. If scaling is included, gums may feel slightly tender for a day — normal, and quickly resolved.",
    faqs: [
      {
        q: "How often should I get a dental check-up in Jaipur?",
        a: "For most people, every six months is ideal. Your dentist will recommend a personalised recall interval based on your gum health, brushing habits and history.",
      },
      {
        q: "Does a check-up hurt?",
        a: "No. A check-up is a gentle examination. If any part of the visit might be uncomfortable, we'll always tell you before we proceed.",
      },
      {
        q: "Do you take new patients at your Jaipur clinic?",
        a: `Yes — new patients are welcome at ${brand}. Book an appointment and we'll take the time to understand your needs from the very first visit.`,
      },
    ],
    related: ["teeth-cleaning", "root-canal", "crowns-bridges"],
    local:
      `Conveniently located in Jaipur, ${brand} makes regular dental check-ups easy to fit around work and family. Our team serves patients across the city.`,
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning",
    short: "Professional scaling and polishing that leaves your mouth feeling genuinely fresh.",
    overview:
      `Even careful brushing misses plaque in tight spaces. Professional teeth cleaning at ${brand} removes hardened tartar above and below the gumline, then polishes your teeth for a noticeably cleaner, smoother feeling. It's preventive care that pays for itself many times over.`,
    image: img(6627413),
    imageAlt: "Professional teeth cleaning and polishing at a modern dental clinic in Jaipur",
    seoTitle: `Teeth Cleaning in Jaipur | Dental Scaling & Polishing | ${brand}`,
    seoDescription:
      `Professional teeth cleaning in Jaipur at ${brand}. Gentle scaling and polishing to remove plaque, prevent gum disease and keep your smile bright.`,
    whoItsFor: [
      "Anyone with plaque build-up or staining from tea, coffee or tobacco",
      "Patients with bleeding or puffy gums",
      "A preventive routine, twice a year",
      "Smokers and tobacco users at higher risk of gum disease",
    ],
    procedure: [
      {
        title: "Gum health assessment",
        body: "We check your gum pockets to see how much tartar is present and whether gum disease is developing.",
      },
      {
        title: "Scaling",
        body: "Ultrasonic and hand instruments gently remove calculus above and below the gumline. No pain — just a light vibration.",
      },
      {
        title: "Polishing",
        body: "Teeth are polished with a fine paste to remove surface stain and leave a smooth finish that's harder for plaque to grip.",
      },
      {
        title: "Oral hygiene coaching",
        body: "You'll get practical, personalised advice on brushing and flossing that actually fits your routine.",
      },
    ],
    benefits: [
      "Reduces the risk of gum disease and tooth loss",
      "Brighter, cleaner-looking teeth",
      "Fresher breath from removing odour-causing bacteria",
      "A smoother surface that stays cleaner for longer",
    ],
    recovery:
      "You can eat and drink normally immediately after. Teeth may feel sensitive to cold for a day or two — this settles quickly and is completely normal.",
    faqs: [
      {
        q: "Is teeth cleaning painful?",
        a: "Not for most people. You may feel light vibration and scraping. If your gums are inflamed, there can be mild sensitivity — we work gently and will pause whenever needed.",
      },
      {
        q: "How often should I get my teeth cleaned?",
        a: "A cleaning every six months suits most patients. If you have gum disease or heavy build-up, we may recommend a shorter interval.",
      },
      {
        q: "Will cleaning damage my tooth enamel?",
        a: "No. Professional instruments only remove tartar; they do not wear away enamel. Polishing uses a gentle paste designed for daily-use enamel safety.",
      },
    ],
    related: ["dental-checkup", "teeth-whitening", "smile-makeover"],
    local:
      `Jaipur's weather and chai culture can be tough on your teeth — professional cleaning at ${brand} helps you stay ahead of staining and gum issues close to home.`,
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    short: "Modern, comfortable root canal treatment that saves your natural tooth.",
    overview:
      `A root canal saves a tooth that is badly decayed or infected rather than removing it. With modern anaesthesia, rotary instruments and digital X-rays, root canal treatment at ${brand} is far more comfortable than its reputation suggests — usually no more stressful than getting a filling.`,
    image: img(7800675),
    imageAlt: "Root canal treatment being performed with modern equipment in a Jaipur dental clinic",
    seoTitle: `Root Canal Treatment in Jaipur | Painless RCT | ${brand}`,
    seoDescription:
      `Comfortable, modern root canal treatment in Jaipur at ${brand}. Save your natural tooth with painless, single-visit RCT by experienced specialists.`,
    whoItsFor: [
      "Patients with deep decay reaching the nerve",
      "Persistent tooth pain, especially when biting or with hot/cold",
      "A cracked or injured tooth",
      "Anyone who's been told their tooth may need extraction",
    ],
    procedure: [
      {
        title: "Numbing & isolation",
        body: "The tooth is fully numbed and isolated so the treatment is comfortable and clean.",
      },
      {
        title: "Cleaning the canals",
        body: "Infected nerve tissue is gently removed and the canals are cleaned and disinfected with precision instruments.",
      },
      {
        title: "Sealing",
        body: "The canals are sealed with a biocompatible material to prevent reinfection.",
      },
      {
        title: "Crown protection",
        body: "The tooth is usually capped with a crown to restore its strength so you can chew normally again.",
      },
    ],
    benefits: [
      "Saves your natural tooth — always the first choice",
      "Relieves pain caused by an infected nerve",
      "Prevents infection spreading to the jawbone",
      "Restores comfortable chewing and function",
    ],
    recovery:
      "Mild soreness for a few days is common and easily managed with over-the-counter pain relief. Most patients return to normal routine the same day.",
    faqs: [
      {
        q: "How long does a root canal take in Jaipur?",
        a: `Many root canals at ${brand} are completed in a single visit of roughly 60–90 minutes. Complex cases may need a second visit — we'll give you a clear timeline beforehand.`,
      },
      {
        q: "Is root canal treatment painful?",
        a: "With modern anaesthesia, the treatment itself is not painful. Most of the pain people fear actually comes from the infection before treatment — which the root canal resolves.",
      },
      {
        q: "What happens if I delay root canal treatment?",
        a: "Delaying can let infection spread into the jawbone, cause abscesses, and eventually make the tooth unsalvageable. Treating it early protects your natural tooth.",
      },
    ],
    related: ["dental-implants", "crowns-bridges", "dental-checkup"],
    local:
      `Root canal treatment in Jaipur shouldn't mean travelling across the city twice. ${brand}'s single-visit approach gets you back to your routine faster.`,
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "A permanent, natural-looking replacement for a missing tooth.",
    overview:
      "A dental implant is a small titanium post placed into the jawbone that acts like a natural tooth root, topped with a lifelike crown. Unlike bridges or dentures, implants replace the root as well as the crown — protecting your jawbone and giving you a tooth that looks, feels and functions naturally.",
    image: img(4269948),
    imageAlt: "Close-up of a dental implant restoration at a modern Jaipur dental clinic",
    seoTitle: `Dental Implants in Jaipur | Permanent Tooth Replacement | ${brand}`,
    seoDescription:
      `Dental implants in Jaipur at ${brand} — permanent, natural-looking tooth replacement that protects your jawbone and restores confident chewing.`,
    whoItsFor: [
      "Anyone with a missing tooth or multiple missing teeth",
      "Denture wearers looking for a fixed alternative",
      "Patients wanting to protect jawbone health long-term",
      "Adults whose jaw has finished growing",
    ],
    procedure: [
      {
        title: "Consultation & planning",
        body: "We assess your bone health and smile with digital imaging, and plan your implant to blend seamlessly with your existing teeth.",
      },
      {
        title: "Implant placement",
        body: "The titanium implant is placed gently into the jawbone under local anaesthesia.",
      },
      {
        title: "Healing & integration",
        body: "Over the following months the bone naturally fuses to the implant — a process called osseointegration that gives your replacement tooth real stability.",
      },
      {
        title: "Final restoration",
        body: "Once healed, a custom crown is fitted onto the implant — matched to the shade and shape of your natural teeth.",
      },
    ],
    benefits: [
      "Permanent, stable tooth replacement",
      "Preserves jawbone and facial structure",
      "Eat, speak and smile with complete confidence",
      "Natural look matched to your own teeth",
    ],
    recovery:
      "Expect mild swelling and soreness for a few days after placement. Normal eating resumes within a week or two, with full healing over several months.",
    faqs: [
      {
        q: "How much does a dental implant cost in Jaipur?",
        a: "Costs vary with the number of implants, the implant system and whether bone grafting is needed. We provide transparent, itemised quotes after a consultation — no surprise charges.",
      },
      {
        q: "Are dental implants painful?",
        a: "Placement is done under local anaesthesia, so the procedure itself is comfortable. Post-procedure discomfort is usually milder than a tooth extraction.",
      },
      {
        q: "How long do dental implants last?",
        a: "With good oral hygiene and regular check-ups, implants are designed to last many years — often a lifetime. We'll guide you on caring for them.",
      },
    ],
    related: ["crowns-bridges", "smile-makeover", "dental-checkup"],
    local:
      `Looking for dental implants in Jaipur? ${brand} offers complete implant care — planning, placement and restoration — all in one calm, modern clinic.`,
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    short: "A safe, professional brightening that's visible in a single session.",
    overview:
      `Professional teeth whitening lifts years of staining from tea, coffee, tobacco and age — safely, and in a way that respects your enamel. Unlike over-the-counter kits, in-clinic whitening at ${brand} is supervised, calibrated and tailored to your natural tooth shade.`,
    image: img(15225509),
    imageAlt: "Bright natural smile after professional teeth whitening in Jaipur",
    seoTitle: `Teeth Whitening in Jaipur | Professional Brightening | ${brand}`,
    seoDescription:
      `Professional teeth whitening in Jaipur at ${brand} — safe, in-clinic brightening that visibly lifts stains in a single session. Book a consultation.`,
    whoItsFor: [
      "Anyone bothered by yellowing or stained teeth",
      "Tea, coffee or tobacco users",
      "A brightener before a wedding, event or new photo",
      "Patients with healthy teeth and gums (cleared by your dentist)",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "We check your teeth and gums are healthy and confirm whitening is right for you.",
      },
      {
        title: "Protection",
        body: "Your gums are carefully protected before the whitening agent is applied.",
      },
      {
        title: "Application",
        body: "A professional-grade whitening gel is applied and activated under supervision.",
      },
      {
        title: "Your shade, revealed",
        body: "You'll see your new shade immediately. We'll also recommend a take-home touch-up plan to keep it lasting.",
      },
    ],
    benefits: [
      "Visible brightening in a single session",
      "Professional supervision protects enamel and gums",
      "Results tailored to a natural-looking shade",
      "Includes guidance to make results last",
    ],
    recovery:
      "Some patients notice mild, temporary sensitivity to cold for 24–48 hours. It settles on its own and is easily managed.",
    faqs: [
      {
        q: "Does teeth whitening damage enamel?",
        a: "Professional whitening, when performed after a dental assessment, is safe for enamel. We confirm your teeth are healthy before starting and protect your gums throughout.",
      },
      {
        q: "How long do whitening results last?",
        a: "Typically 6–12 months, depending on diet and habits. Touch-up kits and avoiding heavy staining help results last longer.",
      },
      {
        q: "Can I whiten my teeth if I have fillings?",
        a: "Whitening affects natural teeth but not existing fillings or crowns. We'll discuss how this affects your individual result during your consultation.",
      },
    ],
    related: ["veneers", "smile-makeover", "teeth-cleaning"],
    local:
      `Jaipur's winters are full of weddings and celebrations — a quick professional whitening at ${brand} gets your smile photo-ready.`,
  },
  {
    slug: "veneers",
    name: "Veneers",
    short: "Ultra-thin ceramic shells that redesign the front of your smile.",
    overview:
      `Porcelain veneers are wafer-thin ceramic layers bonded to the front of your teeth to correct chips, gaps, discolouration and uneven shapes. Designed with your face in mind, veneers at ${brand} give you a smile that looks natural — never 'done'.`,
    image: img(5622257),
    imageAlt: "Close-up of natural-looking porcelain veneers on a smile",
    seoTitle: `Veneers in Jaipur | Porcelain Veneers | Cosmetic Dentist ${brand}`,
    seoDescription:
      `Porcelain veneers in Jaipur at ${brand} — ultra-thin ceramic shells that correct chips, gaps and discolouration for a natural, confident smile.`,
    whoItsFor: [
      "Chipped, worn or uneven front teeth",
      "Gaps you'd like closed without orthodontics",
      "Stubborn discolouration that whitening can't fix",
      "Anyone wanting a long-term cosmetic upgrade",
    ],
    procedure: [
      {
        title: "Smile design",
        body: "We study your facial features and listen to what you want, so the final result suits you — not a template.",
      },
      {
        title: "Preparation",
        body: "A minimal amount of enamel is prepared so the veneer fits naturally and seamlessly.",
      },
      {
        title: "Crafting",
        body: "Your veneers are crafted to match the shade, translucency and character of your natural teeth.",
      },
      {
        title: "Bonding",
        body: "Each veneer is bonded precisely into place, then polished to blend beautifully with your smile.",
      },
    ],
    benefits: [
      "Transform chips, gaps and discolouration at once",
      "Ultra-thin design preserves natural tooth structure",
      "Stain-resistant ceramic that stays bright",
      "Natural, custom-designed appearance",
    ],
    recovery:
      "There's typically no recovery time. Teeth may feel slightly different for a few days as you adjust to the new surface.",
    faqs: [
      {
        q: "How long do veneers last?",
        a: "Porcelain veneers typically last 10–15 years or more with good oral hygiene and regular check-ups.",
      },
      {
        q: "Are veneers reversible?",
        a: "Veneers involve minimal, permanent preparation of enamel, so they're considered a permanent treatment. We'll discuss this honestly before you commit.",
      },
      {
        q: "Will veneers look fake?",
        a: "No — when designed well, veneers mimic the natural translucency of real teeth. The result is a brighter smile that still looks authentically yours.",
      },
    ],
    related: ["smile-makeover", "teeth-whitening", "dental-implants"],
    local:
      `Whether it's for a ceremony or everyday confidence, patients across Jaipur choose ${brand} veneers for subtle, natural-looking results.`,
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    short: "Strong, natural-looking restorations that rebuild damaged or missing teeth.",
    overview:
      `A crown fully caps a weakened tooth, protecting it and restoring its function. A bridge fills the gap of one or more missing teeth using the neighbouring teeth for support. At ${brand}, both are crafted to blend seamlessly with your natural smile.`,
    image: img(4269682),
    imageAlt: "Natural-looking dental crown restoration at a modern dental clinic in Jaipur",
    seoTitle: `Dental Crowns & Bridges in Jaipur | Restorative Dentistry | ${brand}`,
    seoDescription:
      `Dental crowns and bridges in Jaipur at ${brand} — strong, natural-looking restorations that rebuild damaged teeth and close gaps. Book a consultation.`,
    whoItsFor: [
      "Teeth weakened by large fillings or root canal treatment",
      "Cracked or broken teeth",
      "One or more missing teeth",
      "Restoring bite and chewing function",
    ],
    procedure: [
      {
        title: "Tooth preparation",
        body: "The tooth is gently shaped to accept the crown, or prepared to support a bridge.",
      },
      {
        title: "Impressions",
        body: "Precise digital impressions capture the exact shape of your teeth for a perfect fit.",
      },
      {
        title: "Crafting",
        body: "Your crown or bridge is crafted to match the shade and contours of your natural teeth.",
      },
      {
        title: "Fitting",
        body: "The restoration is cemented into place, then checked for comfort, bite and appearance.",
      },
    ],
    benefits: [
      "Protects weakened teeth from further damage",
      "Restores full chewing function",
      "Natural shade-matching",
      "Prevents neighbouring teeth from drifting into gaps",
    ],
    recovery:
      "Mild sensitivity to temperature for a few days is normal. Full comfort returns quickly as you adjust.",
    faqs: [
      {
        q: "How long do dental crowns last?",
        a: "With good care, crowns and bridges typically last 10–15 years. Regular check-ups help catch wear early.",
      },
      {
        q: "Are crowns and bridges noticeable?",
        a: "No — they're colour-matched to your teeth and shaped to look entirely natural.",
      },
      {
        q: "Can a bridge be replaced by an implant?",
        a: "In many cases, yes. We'll compare both options honestly during your consultation so you can choose what fits your goals and budget.",
      },
    ],
    related: ["dental-implants", "root-canal", "dental-checkup"],
    local:
      `From root-canal-protecting crowns to gap-closing bridges, ${brand} brings dependable restorative dentistry to Jaipur families.`,
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeovers",
    short: "A complete, personalised redesign of your smile — combining treatments when you need more than one.",
    overview:
      "A smile makeover combines treatments like whitening, veneers, bonding or alignment correction into one coordinated plan. Rather than fixing teeth one at a time, we start from the smile you want and work backwards, creating a single roadmap that's clear, phased and entirely yours.",
    image: img(13219418),
    imageAlt: `Confident smile transformation from a full smile makeover at ${brand} Jaipur`,
    seoTitle: `Smile Makeover in Jaipur | Complete Smile Design | ${brand}`,
    seoDescription:
      `Complete smile makeovers in Jaipur at ${brand} — a personalised plan combining whitening, veneers and restorative care for a confident smile.`,
    whoItsFor: [
      "People who need several improvements at once",
      "Chipped, stained, gapped or uneven teeth",
      "Anyone unhappy with their smile in photos",
      "A long-term investment in confidence",
    ],
    procedure: [
      {
        title: "Smile consultation",
        body: "We listen to what you dislike and love about your smile, then assess what's clinically needed.",
      },
      {
        title: "Digital design",
        body: "Using photographs and imaging, we design your target smile — showing you the direction before treatment begins.",
      },
      {
        title: "Your treatment plan",
        body: "Treatments are sequenced into a clear, phased roadmap with transparent timelines and costs.",
      },
      {
        title: "Transformation",
        body: "Each stage is completed with precision, and the result is refined until it feels like you — only brighter.",
      },
    ],
    benefits: [
      "One coordinated plan instead of piecemeal fixes",
      "A smile designed around your face and personality",
      "Clear phasing to suit your budget and timeline",
      "Long-term results supported by regular care",
    ],
    recovery:
      "Recovery depends on which treatments are involved. Most patients return to normal life the same day, with specific guidance provided at each stage.",
    faqs: [
      {
        q: "How long does a smile makeover take?",
        a: "It depends on the combination of treatments. Simple plans can take a few weeks; complex ones a few months. You'll get a clear timeline at your consultation.",
      },
      {
        q: "How much does a smile makeover cost?",
        a: "Because every makeover is unique, costs vary. We provide a detailed, itemised plan after consultation — no vague estimates.",
      },
      {
        q: "Will my smile look natural?",
        a: "That's the entire point. We design around your features and desired look, so the result enhances you rather than replacing you.",
      },
    ],
    related: ["veneers", "teeth-whitening", "dental-implants"],
    local:
      `Your smile is often the first thing people notice about you in Jaipur — and ${brand} designs makeovers that feel authentically yours.`,
  },
];

export const featuredTreatmentSlug = "dental-checkup";

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function relatedTreatments(slug: string) {
  const t = getTreatment(slug);
  if (!t) return [];
  return t.related
    .map((s) => getTreatment(s))
    .filter((x): x is Treatment => Boolean(x));
}
