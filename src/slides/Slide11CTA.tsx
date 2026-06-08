import ctaBg from "@/assets/slides/photo-cta.jpg";
import { SlideChrome, SlideTag } from "@/components/SlideChrome";

export function Slide11CTA({ index, total }: { index: number; total: number }) {
  return (
    <div
      className="slide dark-overlay"
      style={{ background: `url(${ctaBg}) center/cover` }}
    >
      <div className="brand-vert" style={{ color: "var(--cream)" }}>
        міф · 10
      </div>
      <div className="corner-frame" style={{ left: 56, top: 56, color: "var(--cream)" }} />

      <div className="slide-padding" style={{ color: "var(--cream)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <SlideTag variant="chip">міф · 10 — фінал</SlideTag>
          <span className="brand-stamp">ksenia rusnak</span>
        </div>

        <div style={{ marginTop: 64, maxWidth: 920 }}>
          <div className="slide-accent" style={{ fontSize: 40, opacity: 0.8, marginBottom: 14 }}>
            власник
          </div>
          <h2 className="slide-title" style={{ fontSize: 92, lineHeight: 0.98 }}>
            має{" "}
            <span className="slide-accent" style={{ fontSize: 92 }}>
              контролювати
            </span>
            <br />
            все
          </h2>
        </div>

        <p className="slide-body" style={{ marginTop: 44, maxWidth: 900 }}>
          Мікроменеджмент власника — це головне гальмо для зростання компанії.{" "}
          <strong>Завдання фаундера — стратегія та візія.</strong>
        </p>

        <div style={{ marginTop: "auto", marginBottom: 140 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 26,
              opacity: 0.9,
              marginBottom: 24,
              lineHeight: 1.4,
              maxWidth: 760,
              letterSpacing: "0.02em",
            }}
          >
            Хочете перетворити маркетинг на{" "}
            <span className="slide-accent" style={{ fontSize: 30 }}>
              автономний актив
            </span>
            ?<br />Напишіть у директ слово
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 28,
              background: "var(--bone)",
              color: "var(--forest)",
              padding: "26px 56px 26px 44px",
              borderRadius: 4,
              boxShadow: "0 30px 60px -30px rgba(0,0,0,0.55)",
              borderLeft: "3px solid var(--sage)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 76,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              АУДИТ
            </div>
            <div
              className="slide-accent"
              style={{ fontSize: 30, color: "var(--sage)" }}
            >
              →
            </div>
          </div>
        </div>
      </div>

      <div style={{ color: "var(--cream)" }}>
        <SlideChrome index={index} total={total} />
      </div>
    </div>
  );
}