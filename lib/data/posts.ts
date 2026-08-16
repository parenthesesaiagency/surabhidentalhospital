import { img } from "@/lib/media";
import { site } from "@/lib/data/site";

const brand = site.name;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  body: { heading: string; paragraphs: string[] }[];
};

/**
 * Blog content is written to be genuinely useful and medically responsible.
 * Future articles can be added here and will appear automatically.
 */
export const posts: Post[] = [
  {
    slug: "how-often-get-teeth-cleaned",
    title: "How Often Should You Get Your Teeth Cleaned?",
    excerpt:
      "The simple answer for most people is every six months — but the right answer depends on your gums, your habits and your history.",
    date: "2026-01-12",
    readingTime: "4 min read",
    category: "Preventive Care",
    image: img(6627413, 1600, 900),
    imageAlt: "Professional teeth cleaning appointment in Jaipur",
    seoTitle: `How Often Should You Get Your Teeth Cleaned? | ${brand} Jaipur`,
    seoDescription:
      "How often do you really need professional teeth cleaning? A dentist in Jaipur explains what the six-month rule is based on and when it changes.",
    body: [
      {
        heading: "Why the six-month rule exists",
        paragraphs: [
          "Professional cleaning removes plaque and tartar that daily brushing can't reach. For most people, six months is the interval at which plaque has had time to harden into calculus but hasn't yet caused serious gum damage.",
          "It's also the interval most dental health schemes in India reference, and it lines up neatly with a twice-a-year routine that's easy to remember.",
        ],
      },
      {
        heading: "When six months isn't enough",
        paragraphs: [
          "If you have gum disease, heavy tartar build-up, or habits like smoking, your dentist may recommend cleaning every three to four months. The goal is to keep inflammation at bay before it can cause bone loss.",
          "Conversely, someone with excellent hygiene and healthy gums may be fine with an annual visit. The interval should always be personalised — a good dentist will tell you honestly, not just book you in.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Treat professional cleaning as maintenance, not a luxury. A regular check-up is the cheapest way to avoid the pain and cost of advanced gum disease further down the line.",
          "Not sure where you stand? A single check-up in Jaipur is enough to tell you the interval that's right for you.",
        ],
      },
    ],
  },
  {
    slug: "signs-you-may-need-root-canal",
    title: "Signs You May Need a Root Canal",
    excerpt:
      "Root canals have an unfair reputation. Knowing the warning signs means you can act early — and save the tooth.",
    date: "2026-01-26",
    readingTime: "5 min read",
    category: "Restorative Care",
    image: img(7800675, 1600, 900),
    imageAlt: "Root canal treatment chairside in a modern dental clinic",
    seoTitle: `Signs You May Need a Root Canal | ${brand} Jaipur`,
    seoDescription:
      "Wondering if that toothache means a root canal? A Jaipur dentist explains the common warning signs of an infected tooth nerve.",
    body: [
      {
        heading: "Pain that lingers",
        paragraphs: [
          "A sharp twinge when you sip something hot that lingers for many seconds — rather than fading instantly — can point to nerve involvement. So can pain that wakes you at night or throbs without an obvious cause.",
          "Pain on biting or chewing is another classic sign. It suggests the tissue around the root is already inflamed.",
        ],
      },
      {
        heading: "Visible changes",
        paragraphs: [
          "A tooth that's darkened compared to its neighbours, a persistent pimple on the gum, or swelling nearby can all indicate an infection that has reached the root.",
          "None of these are guaranteed signs on their own — but together they're a strong argument for seeing a dentist quickly.",
        ],
      },
      {
        heading: "Don't wait for the pain",
        paragraphs: [
          "Root canal treatment removes the infected nerve and seals the tooth, allowing you to keep it. Delaying allows infection to spread and can make saving the tooth impossible.",
          "If you're experiencing any of these signs in Jaipur, a quick examination is the responsible next step.",
        ],
      },
    ],
  },
  {
    slug: "choosing-dental-clinic-jaipur",
    title: "How to Choose a Dental Clinic in Jaipur",
    excerpt:
      "From transparency to technology, here's a practical checklist to help you compare dental clinics with confidence.",
    date: "2026-02-09",
    readingTime: "5 min read",
    category: "Guides",
    image: img(6627353, 1600, 900),
    imageAlt: "Modern dental clinic interior in Jaipur",
    seoTitle: `How to Choose a Dental Clinic in Jaipur | ${brand}`,
    seoDescription:
      "Choosing a dentist in Jaipur? This practical checklist covers transparency, technology, hygiene and comfort to help you decide with confidence.",
    body: [
      {
        heading: "Transparency over everything",
        paragraphs: [
          "A good clinic explains what's wrong, what can wait, and what it will cost — before starting. Avoid clinics that push treatment you didn't come in for, or give vague estimates.",
          "Ask to see an itemised plan. Clarity about price and procedures is the single strongest signal of a trustworthy clinic.",
        ],
      },
      {
        heading: "Technology and hygiene",
        paragraphs: [
          "Digital X-rays, sterilisation protocols and modern equipment are baseline expectations, not luxuries. Don't be shy about asking how instruments are sterilised.",
          "The clinic should also be comfortable and calm — because how a space makes you feel matters as much as its equipment.",
        ],
      },
      {
        heading: "A plan that fits your life",
        paragraphs: [
          "The right clinic works around your schedule, tells you honestly when something can wait, and makes you feel heard at every visit.",
          "Visit, ask questions, and trust how you feel. The best dentist in Jaipur for you is the one who treats you like a person, not a procedure.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
