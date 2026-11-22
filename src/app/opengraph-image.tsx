import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const alt =
  "Yash Khurana — AI agents and web apps, built to earn their keep.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [regular, italic, sans] = await Promise.all([
    readFile(
      join(process.cwd(), "src/assets/fonts/InstrumentSerif-Regular.ttf"),
    ),
    readFile(
      join(process.cwd(), "src/assets/fonts/InstrumentSerif-Italic.ttf"),
    ),
    readFile(join(process.cwd(), "src/assets/fonts/Inter-Regular.ttf")),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f6f3ee",
        color: "#1d1b18",
        padding: "64px 76px",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 25,
        }}
      >
        <span>{site.name}</span>
        <span style={{ color: "#3d7a52", fontSize: 19 }}>
          Available for freelance work
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 102,
          fontFamily: "Instrument Serif",
          fontSize: 90,
          letterSpacing: "-2px",
          lineHeight: 1.12,
        }}
      >
        <span>{site.hero.heading}</span>
        <span style={{ color: "#b4532a", fontStyle: "italic" }}>
          {site.hero.accent}
        </span>
      </div>
      <div
        style={{
          marginTop: "auto",
          paddingTop: 25,
          borderTop: "1px solid #e4ddd1",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          color: "#6b655c",
        }}
      >
        <span>AI agents · Automation · Full-stack web apps</span>
        <span>yashkhurana.dev</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter", data: sans, weight: 400, style: "normal" },
        {
          name: "Instrument Serif",
          data: regular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Instrument Serif",
          data: italic,
          weight: 400,
          style: "italic",
        },
      ],
    },
  );
}
