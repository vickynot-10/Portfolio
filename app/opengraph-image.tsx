import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vignesh | Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            color: "#2dd4bf",
            fontWeight: 600,
            marginBottom: "16px",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: "80px",
            fontWeight: 700,
            color: "#f1f5f9",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Vignesh
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#94a3b8",
            marginBottom: "48px",
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {["React", "Next.js", "Node.js", "TypeScript", "MongoDB"].map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(45,212,191,0.1)",
                border: "1px solid rgba(45,212,191,0.2)",
                color: "#2dd4bf",
                padding: "8px 20px",
                borderRadius: "999px",
                fontSize: "18px",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}