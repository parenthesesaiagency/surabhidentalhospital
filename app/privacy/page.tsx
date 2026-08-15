import { legalMetadata, LegalPage } from "@/components/legal-page";
import { site } from "@/lib/data/site";

export const metadata = legalMetadata(
  "Privacy Policy",
  `How ${site.name} collects, uses and protects your personal information.`,
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 March 2026"
      intro={`This privacy policy explains how ${site.name} collects, uses and protects your personal information when you visit our website or contact our clinic in ${site.location.city}. We keep this policy simple on purpose — no jargon, no surprises.`}
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "When you contact us through this website — by call, WhatsApp, email or the appointment request flow — we collect the details you choose to share, such as your name and contact number.",
            "This website does not use advertising trackers. It does not sell or share your data with third parties.",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "We use your information solely to respond to your enquiry, schedule and manage your appointment, and provide the dental care you request.",
            "We will never contact you about services you have not asked about, and we never share your details with marketing partners.",
          ],
        },
        {
          heading: "Data security",
          paragraphs: [
            "Your information is stored securely and is only accessible to the team members who need it to serve you. We follow reasonable technical and organisational measures to protect your data.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You may request a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it at any time. We will respond promptly.",
            "If you ever have a concern about how your data is handled, contact us and we will put it right.",
          ],
        },
      ]}
    />
  );
}
