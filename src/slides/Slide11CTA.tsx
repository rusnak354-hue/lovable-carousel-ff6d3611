import ctaBg from "@/assets/slides/photo-cta.jpg";
import { SlideChrome, SlideTag } from "@/components/SlideChrome";

export function Slide11CTA({ index, total }: { index: number; total: number }) {
  return (
    <div
      className="slide dark-overlay"
      style={{ background: `url(${ctaBg}) center/cover` }}
    >
      <div className="slide-padding">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SlideTag>міф 10</SlideTag>
          <SlideTag>фінал</SlideTag>
        </div>

        <h2
          className="slide-title"
          style={{
            fontSize: 88,
            color: "var(--cream)",
            marginTop: 56,
            maxWidth: 920,
            lineHeight: 0.98,
          }}
        >
          Власник<br />має контролювати все
        </h2>

        <p
          className="slide-body"
          style={{
            marginTop: 40,
            color: "var(--cream)",
            maxWidth: 900,
          }}
        >
          Мікроменеджмент власника — це головне гальмо для зростання компанії.{" "}
          <strong>Завдання фаундера — стратегія та візія.</strong>
        </p>

        <div style={{ marginTop: "auto", marginBottom: 120 }}>
          <p
            style={{
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
              fontSize: 30,
              opacity: 0.9,
              marginBottom: 28,
              lineHeight: 1.35,
            }}
          >
            Хочете перетворити маркетинг на автономний актив?<br />
            Напишіть у директ слово
          </p>

          <div
            style={{
              display: "inline-block",
              background: "var(--cream)",
              color: "var(--forest)",
              padding: "28px 64px",
              borderRadius: 18,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 84,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              boxShadow: "0 30px 60px -30px rgba(0,0,0,0.5)",
            }}
          >
            АУДИТ
          </div>
        </div>
      </div>

      <div style={{ color: "var(--cream)" }}>
        <SlideChrome index={index} total={total} />
      </div>
    </div>
  );
}