import { ImageResponse } from "next/og";
import { quickFacts, SITE_URL } from "./data";

// Link-preview card (Open Graph / Twitter), rendered at build time.
// Colors mirror the dark theme tokens in app/globals.css; satori can't read CSS variables.
const C = {
  bg: "#0a0a0a",
  fg: "#f5f5f5",
  soft: "#d4d4d4",
  muted: "#a3a3a3",
  panel: "#111111",
  line: "rgba(255,255,255,0.12)",
  lineStrong: "rgba(255,255,255,0.28)",
  grid: "rgba(255,255,255,0.05)",
};

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Carlos Miguel (Cholo) Canonizado — Tech Lead & Software Engineer";

const fact = (k: string) => quickFacts.find((f) => f.k === k)?.v ?? "";
const domain = SITE_URL.replace(/^https?:\/\/(www\.)?/, "");

const badge = "SOFTWARE ENGINEER <> PHILIPPINES";
const role = `${fact("role")} @ ${fact("at")}`;
const prev = `prev. ${fact("prev")}`;
const focus = fact("focus");

// Fetches only the glyphs we use from Google Fonts (TTF, which satori needs).
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!src) throw new Error(`No TTF for ${family} ${weight}`);
  const res = await fetch(src[1]);
  if (!res.ok) throw new Error(`Font fetch failed: ${res.status}`);
  return res.arrayBuffer();
}

async function loadFonts() {
  const sansText = "Carlos Miguel (Cholo) Canonizado" + role + prev;
  const monoText = badge + focus + domain + "~/cholo $ whoami";
  try {
    const [sans600, sans400, mono] = await Promise.all([
      loadGoogleFont("Space Grotesk", 600, sansText),
      loadGoogleFont("Space Grotesk", 400, sansText),
      loadGoogleFont("JetBrains Mono", 400, monoText),
    ]);
    return [
      { name: "Space Grotesk", data: sans600, weight: 600 as const, style: "normal" as const },
      { name: "Space Grotesk", data: sans400, weight: 400 as const, style: "normal" as const },
      { name: "JetBrains Mono", data: mono, weight: 400 as const, style: "normal" as const },
    ];
  } catch {
    // Offline build: fall back to the bundled default font rather than failing.
    return undefined;
  }
}

export async function renderOgImage() {
  const fonts = await loadFonts();
  const mono = fonts ? "JetBrains Mono" : undefined;
  const sans = fonts ? "Space Grotesk" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: C.bg,
          backgroundImage: `linear-gradient(${C.grid} 1px, transparent 1px), linear-gradient(90deg, ${C.grid} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          color: C.fg,
          fontFamily: sans,
        }}
      >
        {/* Top row: logo mark + domain, terminal prompt */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="56" height="56" viewBox="0 0 64 64">
              <rect width="64" height="64" fill={C.bg} stroke={C.lineStrong} strokeWidth="2" />
              <path d="M47 15.5H17.5V48.5H47" fill="none" stroke={C.fg} strokeWidth="9" />
              <rect x="40" y="28" width="8" height="8" fill={C.fg} />
            </svg>
            <span style={{ fontFamily: mono, fontSize: 26, color: C.soft }}>{domain}</span>
          </div>
          <span style={{ fontFamily: mono, fontSize: 22, color: C.muted }}>~/cholo $ whoami</span>
        </div>

        {/* Middle: badge + name */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "10px 18px",
                border: `1px solid ${C.lineStrong}`,
                backgroundColor: C.bg,
                fontFamily: mono,
                fontSize: 20,
                letterSpacing: "0.08em",
                color: C.muted,
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: C.fg }} />
              {badge}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.035em",
            }}
          >
            <span>Carlos Miguel&nbsp;</span>
            <span style={{ color: C.muted }}>(Cholo)&nbsp;</span>
            <span>Canonizado</span>
          </div>
        </div>

        {/* Bottom: role panel */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "22px 28px",
            border: `1px solid ${C.lineStrong}`,
            backgroundColor: C.panel,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 32, fontWeight: 600 }}>{role}</span>
            <span style={{ fontSize: 24, color: C.muted }}>{prev}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 4,
              fontFamily: mono,
              fontSize: 20,
              color: C.soft,
            }}
          >
            {focus.split(" · ").map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
