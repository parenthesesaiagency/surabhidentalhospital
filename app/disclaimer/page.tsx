import { legalMetadata, LegalPage } from "@/components/legal-page";

export const metadata = legalMetadata(
  "Medical Disclaimer",
  "Important information about the educational content on this website.",
  "/disclaimer",
);

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      updated="1 March 2026"
      intro="Please read this disclaimer carefully before relying on any information found on this website."
      sections={[
        {
          heading: "General information only",
          paragraphs: [
            "All content on this website — including treatment descriptions, articles, FAQ answers and price-related guidance — is provided for general educational purposes only. It does not constitute medical or dental advice, and it is not a diagnosis or treatment plan.",
          ],
        },
        {
          heading: "Always consult a professional",
          paragraphs: [
            "Oral health is personal. Before acting on anything you read here, please consult a qualified dental professional who can assess your specific situation. Never delay or avoid seeking professional advice because of something you read on this website.",
          ],
        },
        {
          heading: "Results vary",
          paragraphs: [
            "Any outcomes described on this website — including cosmetic results — vary from person to person. We make no guarantee that your experience will match examples or descriptions shown.",
          ],
        },
        {
          heading: "Emergencies",
          paragraphs: [
            "If you are experiencing a dental emergency — severe pain, uncontrolled bleeding, or a knocked-out tooth — do not rely on this website. Contact our clinic or seek emergency care immediately.",
          ],
        },
      ]}
    />
  );
}
