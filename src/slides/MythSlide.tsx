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
      ? "slide-bg-cream"
      : "";

  const fmt = (n: number) => String(n).padStart(2, "0");
  const lightText = tone !== "cream";

  return (
    <div
      className={`slide ${bgClass} ${isPhoto ? "dark-overlay" : ""}`}
      style={
        isPhoto && bgImage ? { background: `url(${bgImage}) center/cover` } : undefined
      }
    >
      <span
        className="ghost-numeral"
        style={{
          right: -60,
          bottom: -180,
          color: lightText ? "var(--cream)" : "var(--sage)",
        }}
      >
        {fmt(mythNumber)}
      </span>

      <div
        className="arc-deco"
        style={{
          width: 1100,
          height: 1100,
          left: -420,
          top: -380,
          color: lightText ? "var(--cream)" : "var(--sage)",
        }}
      />

      <div className="slide-padding">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <SlideTag>міф {fmt(mythNumber)}</SlideTag>
        </div>

        <div style={{ marginTop: 56, maxWidth: 920 }}>
          <h2
            className="slide-title"
            style={{
              fontSize: 92,
              lineHeight: 0.95,
              color: lightText ? "var(--cream)" : "var(--forest)",
            }}
          >
            {title}
          </h2>
        </div>

        <div
          className="slide-body"
          style={{
            marginTop: 48,
            maxWidth: 920,
            color: lightText ? "var(--cream)" : "var(--ink)",
          }}
        >
          {body}
        </div>

        {highlight && (
          <div style={{ marginTop: "auto", marginBottom: 120, maxWidth: 880 }}>
            <div className="quote-box">{highlight}</div>
          </div>
        )}
      </div>

      <div style={{ color: lightText ? "var(--cream)" : "var(--forest)" }}>
        <SlideChrome index={index} total={total} />
      </div>
    </div>
  );
}