import { ImageResponse } from "next/og";
import { site } from "@/lib/data/site";
import { content } from "@/lib/data/content";

export const alt = `${site.legalName} — ${content.clinicTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "#071112",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <span
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#0BA7A5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            {content.ogImage.mark}
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "30px",
                fontWeight: 800,
                letterSpacing: "0.02em",
                color: "#FFFFFF",
              }}
            >
              {content.brand.wordmark}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.32em",
                color: "#0BA7A5",
              }}
            >
              {content.brand.descriptor.toUpperCase()}
            </span>
          </div>
        </div>
        <span
          style={{
            fontSize: "76px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.06,
            color: "#FFFFFF",
            maxWidth: "960px",
          }}
        >
          {content.ogImage.line1}
          <br />
          {content.ogImage.line2}
        </span>
        <span
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {site.location.city}, {site.location.state}
        </span>
      </div>
    ),
    { ...size },
  );
}
