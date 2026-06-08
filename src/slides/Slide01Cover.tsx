import coverBg from "@/assets/slides/cover-bg.jpg";
import { SlideTag } from "@/components/SlideChrome";

export function Slide01Cover() {
  return (
    <div className="slide dark-overlay" style={{ background: `url(${coverBg}) center/cover` }}>
      <div className="brand-vert" style={{ color: "var(--cream)" }}>
        K · RUSNAK
      </div>
      <div className="corner-frame" style={{ left: 56, top: 56, color: "var(--cream)" }} />
      <div className="corner-frame" style={{ right: 56, bottom: 56, color: "var(--cream)" }} />

      <div className="slide-padding" style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", color: "var(--cream)" }}>
          <SlideTag variant="chip">карусель · n.01</SlideTag>
          <div style={{ textAlign: "right" }}>
            <div className="brand-stamp">ksenia rusnak</div>
            <div className="tag-bracket" style={{ marginTop: 6, fontSize: 16, letterSpacing: "0.32em" }}>
              strategy &amp; growth
            </div>
          </div>
        </div>

        <div style={{ marginTop: "auto", marginBottom: 60, color: "var(--cream)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 28, marginBottom: 18 }}>
            <span className="slash-divider" style={{ width: 96, opacity: 0.7 }} />
            <span className="tag-bracket" style={{ opacity: 0.8 }}>розбір міфів · 2026</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 36 }}>
            <div
              className="slide-accent"
              style={{
                fontSize: 620,
                lineHeight: 0.82,
                letterSpacing: "-0.05em",
              }}
            >
              10
            </div>
            <div style={{ paddingBottom: 60 }}>
              <div
                className="slide-accent"
                style={{ fontSize: 84, lineHeight: 0.95, opacity: 0.92 }}
              >
                душних
              </div>
            </div>
          </div>
          <div
            className="slide-title"
            style={{ fontSize: 96, marginTop: 24, lineHeight: 0.98 }}
          >
            міфів про <br />трафік, ШІ
            <span className="slide-accent" style={{ fontSize: 96, textTransform: "lowercase" }}>
              {" "}та{" "}
            </span>
            високі чеки
          </div>
          <div
            style={{
              marginTop: 36,
              fontFamily: "var(--font-body)",
              fontSize: 26,
              opacity: 0.85,
              maxWidth: 720,
              lineHeight: 1.4,
              letterSpacing: "0.04em",
            }}
          >
            тихий маніфест власника, що масштабує не себе, а систему.
          </div>
        </div>
      </div>
    </div>
  );
}