/**
 * Reviews — real patient testimonials published on the clinic's own website.
 * Lightly cleaned for punctuation; substance kept faithful.
 */

export type Review = {
  name: string;
  initials: string;
  text: string;
  treatment?: string;
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Reena Singh",
    initials: "RS",
    text: "He is good at what he does — polite, good with hand work. This is my second visit and I never felt pain in either treatment. Reasonable prices, good clinical environment, great work. Totally recommend Dr Saurabh.",
    treatment: "Tooth Extraction",
    featured: true,
  },
  {
    name: "Ramjas Yadav",
    initials: "RY",
    text: "Great work, and Dr Saurabh is too good — he is very polite. My tooth was paining so much that I could not sleep at night. On the very first day after my root canal treatment, the pain was gone. Totally recommended.",
    treatment: "Root Canal Treatment",
  },
  {
    name: "Ankit Bhatnagar",
    initials: "AB",
    text: "Absolutely marvellous. I have visited two or three dentists before, but none are as good as Dr Saurabh. He is excellent with his hands, kind, and treats his patients in a charming mood. He never let me feel pain.",
    treatment: "Dental Implant Fixing",
  },
  {
    name: "Imyush",
    initials: "I",
    text: "Fantabulous. Good advice from the doctor, fully painless treatment, and fantastic results from the very next day. If you are suffering from bleeding gums or bad breath, do visit Dr Saurabh — I assure you will get the best treatment.",
    treatment: "Bleeding Gums Treatment",
  },
  {
    name: "Tanay",
    initials: "T",
    text: "It's my third visit. Dr Saurabh is superb and friendly. Totally recommend Dr Saurabh and Surabhi Dental Hospital Implant & Laser Dentistry.",
    treatment: "Scaling / Polishing",
  },
];