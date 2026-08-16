import { media } from "@/lib/media";
import { site } from "@/lib/data/site";

const brand = site.name;

/**
 * Doctor profiles.
 * PLACEHOLDER — [DOCTOR NAME] / [QUALIFICATION] / [SPECIALTY] are to be
 * replaced with real, verified credentials before launch. Qualifications and
 * experience years are deliberately NOT invented.
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
    name: "Dr. [First Name] [Surname]",
    qualification: "[QUALIFICATION · e.g. BDS, MDS]",
    specialty: "[Specialisation — e.g. Implantology]",
    bio: `[Short verified biography — e.g. Lead dentist at ${brand} with a focus on gentle, predictable implant and restorative care.]`,
    photo: media.doctors[0],
  },
  {
    id: "doctor-2",
    name: "Dr. [First Name] [Surname]",
    qualification: "[QUALIFICATION · e.g. BDS, MDS]",
    specialty: "[Specialisation — e.g. Root Canal & Endodontics]",
    bio: "[Short verified biography.]",
    photo: media.doctors[1],
  },
  {
    id: "doctor-3",
    name: "Dr. [First Name] [Surname]",
    qualification: "[QUALIFICATION · e.g. BDS]",
    specialty: "[Specialisation — e.g. Orthodontics & Alignment]",
    bio: "[Short verified biography.]",
    photo: media.doctors[2],
  },
];

export const doctorSectionNote =
  "Doctor profiles and credentials will be added here as they are confirmed. Nothing is published until it has been verified.";
