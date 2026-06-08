import { SlideChrome, SlideTag } from "@/components/SlideChrome";

export type MythTone = "forest" | "sage" | "cream" | "photo";

export interface MythSlideProps {
  mythNumber: number;
  index: number;
  total: number;
  title: string;
  body: React.ReactNode;
  highlight?: string;
  tone: MythTone;
  bgImage?: string;
}

export function MythSlide({
  mythNumber,
  index,
  total,
  title,
  body,
  highlight,
  tone,
  bgImage,
}: MythSlideProps) {
  const isPhoto = tone === "photo";
  const bgClass =
    tone === "forest"
      ? "slide-bg-forest"
      : tone === "sage"
      ? "slide-bg-sage"
      : tone === "cream"
      ? "slide-bg-bone"
      : "";

  const fmt = (n: number) => String(n).padStart(2, "0");
  const lightText = tone !== "cream";
  const fg = lightText ? "var(--cream)" : "var(--forest)";
  const ghostColor = lightText ? "var(--cream)" : "var(--sage-mid)";

  return (
    <div
      className={`slide ${bgClass} ${isPhoto ? "dark-overlay" : ""}`}
      style={
        isPhoto && bgImage ? { background: `url(${bgImage}) center/cover` } : undefined
      }
    >
      <div className="brand-vert" style={{ color: fg }}>
        міф · {fmt(mythNumber)}
      </div>

      <span
        className="ghost-numeral"
        style={{
          right: -80,
          bottom: -220,
          color: ghostColor,
        }}
      >
        {fmt(mythNumber)}
      </span>

      <div
        className="arc-deco"
        style={{
          width: 1400,
          height: 1400,
          left: -520,
          top: -480,
          color: ghostColor,
        }}
      />
      <div
        className="arc-deco"
        style={{
          width: 320,
          height: 320,
          left: 120,
          top: 120,
          color: ghostColor,
          opacity: 0.12,
        }}
      />

      <div className="slide-padding" style={{ color: fg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <SlideTag variant="chip">
            міф · {fmt(mythNumber)}
          </SlideTag>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span className="slash-divider" style={{ width: 40 }} />
            <span className="brand-stamp">ksenia rusnak</span>
          </div>
        </div>

        <div style={{ marginTop: 72, maxWidth: 940 }}>
          <div
            className="slide-accent"
            style={{ fontSize: 38, opacity: 0.75, marginBottom: 18 }}
          >
            міф номер
            <span style={{ fontFamily: "var(--font-display)", fontSize: 38, marginLeft: 16 }}>
              {fmt(mythNumber)}
            </span>
          </div>
          <h2
            className="slide-title"
            style={{ fontSize: 88, lineHeight: 0.98 }}
          >
            {title}
          </h2>
        </div>

        <div
          className="slide-body"
          style={{
            marginTop: 52,
            maxWidth: 940,
            color: fg,
            opacity: lightText ? 0.94 : 1,
          }}
        >
          {body}
        </div>

        {highlight && (
          <div style={{ marginTop: "auto", marginBottom: 130, maxWidth: 900 }}>
            <div className="quote-box">{highlight}</div>
          </div>
        )}
      </div>

      <div style={{ color: fg }}>
        <SlideChrome index={index} total={total} />
      </div>
    </div>
  );
}