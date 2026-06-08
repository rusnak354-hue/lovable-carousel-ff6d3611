import coverBg from "@/assets/slides/cover-bg.jpg";
import { Spark } from "@/components/Spark";
import { SlideTag } from "@/components/SlideChrome";

export function Slide01Cover() {
  return (
    <div className="slide dark-overlay" style={{ background: `url(${coverBg}) center/cover` }}>
      <div className="slide-padding" style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <SlideTag>карусель</SlideTag>
          <span className="tag-bracket">ksenia rusnak</span>
        </div>

        <div style={{ marginTop: "auto", marginBottom: 40 }}>
          <div
            className="slide-title"
            style={{ fontSize: 560, lineHeight: 0.85, color: "var(--cream)", letterSpacing: "-0.04em" }}
          >
            10
          </div>
          <div
            className="slide-title"
            style={{ fontSize: 96, marginTop: 24, color: "var(--cream)", lineHeight: 1 }}
          >
            розборів<br />душних міфів
          </div>
          <div
            style={{
              marginTop: 32,
              fontFamily: "var(--font-body)",
              fontSize: 32,
              opacity: 0.85,
              maxWidth: 720,
              lineHeight: 1.3,
            }}
          >
            про трафік, ШІ та високі чеки
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 56,
          bottom: 56,
          color: "var(--cream)",
          zIndex: 2,
        }}
      >
        <Spark size={32} />
      </div>
      <div
        className="arc-deco"
        style={{ width: 1400, height: 1400, right: -500, top: -400, color: "var(--cream)" }}
      />
    </div>
  );
}