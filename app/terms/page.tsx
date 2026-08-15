import { legalMetadata, LegalPage } from "@/components/legal-page";
import { site } from "@/lib/data/site";

export const metadata = legalMetadata(
  "Terms of Service",
  `The terms that govern your use of the ${site.name} website and services.`,
  "/terms",
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="1 March 2026"
      intro={`These terms govern your use of the ${site.name} website and our dental services in ${site.location.city}. By using this website or booking an appointment, you agree to these terms.`}
      sections={[
        {
          heading: "Website content",
          paragraphs: [
            "The content on this website — including treatment descriptions, articles and FAQs — is provided for general information only. It is not a substitute for professional dental advice, diagnosis or treatment.",
          ],
        },
        {
          heading: "Appointments",
          paragraphs: [
            "Appointments are confirmed directly with our team by phone, WhatsApp or in person. Please arrive on time for your visit; if you need to reschedule, let us know as early as possible so we can offer the slot to another patient.",
          ],
        },
        {
          heading: "Treatment",
          paragraphs: [
            "All treatment is provided following a clinical consultation. We will explain your options, associated costs and any risks before you consent to treatment. Nothing is performed without your informed consent.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "While we take every care to keep website content accurate and current, we cannot guarantee that it is error-free or complete. To the fullest extent permitted by law, " +
              `${site.name} is not liable for any loss arising from reliance on website content.`,
          ],
        },
      ]}
    />
  );
}
