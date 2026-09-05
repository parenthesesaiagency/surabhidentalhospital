import { site } from "@/lib/data/site";

const brand = site.name;

/**
 * Doctor profiles.
 * Credentials below are verified against the clinic's own profile page.
 * Additional team members will be added here as their details are confirmed.
 */

export type Doctor = {
  id: string;
  name: string;
  qualification: string;
  specialty: string;
  bio: string;
  photo: string;
};

export const doctors: Doctor[] = [
  {
    id: "doctor-1",
    name: "Dr. Saurabh Gupta",
    qualification: "BDS · Diploma in Public Health · FAGD",
    specialty: "Implantologist · Laser & Root Canal Specialist",
    bio: `Dr. Saurabh Gupta leads ${brand} with a focus on dental implants, laser dentistry and root canal care. A graduate of Darshan Dental College, Udaipur, he holds a Diploma in Public Health, a Fellowship of the Academy of General Dentistry (FAGD) and a Diploma in Implant Dentistry. He practises gentle, pain-free dentistry and serves as a consultant at Shishu Mangal Hospital, Jaipur.`,
    photo: "/images/doctor-saurabh.png",
  },
];

export const doctorSectionNote =
  "Team profiles are added here as they are confirmed. Nothing is published until it has been verified.";
