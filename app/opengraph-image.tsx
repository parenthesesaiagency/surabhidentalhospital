import { ImageResponse } from "next/og";
import { site } from "@/lib/data/site";

export const alt = `${site.legalName} — Modern Dental Clinic in Jaipur`;
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
            D
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
              DENTORA
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.32em",
                color: "#0BA7A5",
              }}
            >
              DENTAL STUDIO · JAIPUR
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
          Modern dentistry.
          <br />
          Thoughtfully delivered.
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
