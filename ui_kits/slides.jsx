// Ksenia Rusnak — carousel slide components (self-contained, window-exported)
// Conforms to guidelines/DESIGN_RULES.md (production-locked):
//   §1 safe zones (130/108/220)   §3 22px plates   §4 footer (@handle · NN/NN · spark)
//   §5 no repeated brand chrome    §6 light-grad slides    §7 22px photo frames
// Uses the .slide-* classes from styles.css and assets at ../../assets/slides/.

const ASSETS = "../../assets/slides";

// The Spark glyph (4-point sparkle) — inline so it always paints; currentColor.
function Spark({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 0 C17 11 21 15 32 16 C21 17 17 21 16 32 C15 21 11 17 0 16 C11 15 15 11 16 0 Z" fill="currentColor" />
    </svg>
  );
}

// §4 Footer — every slide EXCEPT the cover. Inherits currentColor.
function SlideFooter({ index, total }) {
  const fmt = (n) => String(n).padStart(2, "0");
  return (
    <div className="slide-footer">
      <span className="footer-handle">@ksenia.rusnak</span>
      <span className="footer-rule" />
      <span className="footer-counter">{fmt(index)}/{fmt(total)}</span>
      <span className="footer-rule footer-rule--short" />
      <Spark size={24} className="footer-spark" />
    </div>
  );
}

function Chip({ children }) {
  return <span className="sage-chip">{children}</span>;
}

// ---- Cover (§9: full-bleed photo, chip top-left, headline lower half, NO footer) ----
function CoverSlide() {
  return (
    <div className="slide dark-overlay" style={{ background: `url(${ASSETS}/cover-bg.jpg) center/cover` }}>
      <div className="corner-frame" style={{ left: 56, top: 56, color: "var(--cream)" }} />
      <div className="corner-frame" style={{ right: 56, bottom: 56, color: "var(--cream)" }} />
      <div className="slide-padding" style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", color: "var(--cream)" }}>
          <Chip>карусель · n.01</Chip>
          <div className="tag-bracket" style={{ marginTop: 4, fontSize: 18, letterSpacing: "0.28em" }}>strategy &amp; growth · 2026</div>
        </div>
        <div style={{ marginTop: "auto", color: "var(--cream)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 28, marginBottom: 18 }}>
            <span className="slash-divider" style={{ width: 96, opacity: 0.7 }} />
            <span className="tag-bracket" style={{ opacity: 0.8 }}>розбір міфів</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 36 }}>
            <div className="slide-accent" style={{ fontSize: 540, lineHeight: 0.82, letterSpacing: "-0.05em" }}>10</div>
            <div style={{ paddingBottom: 56 }}>
              <div className="slide-accent" style={{ fontSize: 80, lineHeight: 0.95, opacity: 0.92 }}>душних</div>
            </div>
          </div>
          <div className="slide-title" style={{ fontSize: 92, marginTop: 24, lineHeight: 0.98 }}>
            міфів про <br />трафік, ШІ
            <span className="slide-accent" style={{ fontSize: 92, textTransform: "lowercase" }}> та </span>
            високі чеки
          </div>
          <div style={{ marginTop: 34, fontFamily: "var(--font-body)", fontSize: 26, opacity: 0.85, maxWidth: 720, lineHeight: 1.4, letterSpacing: "0.04em" }}>
            тихий маніфест власника, що масштабує не себе, а систему.
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Myth ----
function MythSlide({ mythNumber, index, total, title, body, highlight, tone, bgImage }) {
  const isPhoto = tone === "photo";
  const isLight = tone === "cream";
  const bgClass = tone === "forest" ? "slide-bg-forest"
    : tone === "sage" ? "slide-bg-sage"
    : isLight ? "slide-bg-light-grad"
    : "";
  const fmt = (n) => String(n).padStart(2, "0");
  const lightText = !isLight;
  const fg = lightText ? "var(--cream)" : "var(--ink)";
  const ghostColor = lightText ? "var(--cream)" : "var(--sage-mid)";

  return (
    <div
      className={`slide ${bgClass} ${isPhoto ? "dark-overlay" : ""}`}
      style={isPhoto && bgImage ? { background: `url(${ASSETS}/${bgImage}) center/cover` } : undefined}
    >
      <span className="ghost-numeral" style={{ right: -80, bottom: -200, color: ghostColor }}>{fmt(mythNumber)}</span>
      <div className="arc-deco" style={{ width: 1400, height: 1400, left: -520, top: -480, color: ghostColor }} />
      <div className="arc-deco" style={{ width: 320, height: 320, left: 120, top: 120, color: ghostColor, opacity: 0.12 }} />
      <div className="slide-padding" style={{ color: fg }}>
        {/* §5: section chip only — no header brand-stamp */}
        <div>
          <Chip>міф · {fmt(mythNumber)}</Chip>
        </div>
        <div style={{ marginTop: 64, maxWidth: 940 }}>
          <div className="slide-accent" style={{ fontSize: 38, opacity: 0.75, marginBottom: 18 }}>
            міф номер
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 38, marginLeft: 16 }}>{fmt(mythNumber)}</span>
          </div>
          <h2 className="slide-title" style={{ fontSize: 84, lineHeight: 0.98 }}>{title}</h2>
        </div>
        <div className="slide-body" style={{ marginTop: 48, maxWidth: 940, opacity: lightText ? 0.94 : 1 }}>{body}</div>
        {highlight && (
          <div style={{ marginTop: "auto", maxWidth: 880 }}>
            {isLight
              ? <div className="grad-plate" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 500, fontSize: 36, lineHeight: 1.3 }}>{highlight}</div>
              : <div className="quote-box">{highlight}</div>}
          </div>
        )}
      </div>
      <div style={{ color: fg }}><SlideFooter index={index} total={total} /></div>
    </div>
  );
}

// ---- CTA ----
function CTASlide({ index, total }) {
  return (
    <div className="slide dark-overlay" style={{ background: `url(${ASSETS}/photo-cta.jpg) center/cover` }}>
      <div className="corner-frame" style={{ left: 56, top: 56, color: "var(--cream)" }} />
      <div className="slide-padding" style={{ color: "var(--cream)" }}>
        <div>
          <Chip>міф · 10 — фінал</Chip>
        </div>
        <div style={{ marginTop: 56, maxWidth: 920 }}>
          <div className="slide-accent" style={{ fontSize: 40, opacity: 0.8, marginBottom: 14 }}>власник</div>
          <h2 className="slide-title" style={{ fontSize: 88, lineHeight: 0.98 }}>
            має <span className="slide-accent" style={{ fontSize: 88 }}>контролювати</span><br />все
          </h2>
        </div>
        <p className="slide-body" style={{ marginTop: 40, maxWidth: 900 }}>
          Мікроменеджмент власника — це головне гальмо для зростання компанії. <strong>Завдання фаундера — стратегія та візія.</strong>
        </p>
        <div style={{ marginTop: "auto" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 26, opacity: 0.9, marginBottom: 24, lineHeight: 1.4, maxWidth: 760, letterSpacing: "0.02em" }}>
            Хочете перетворити маркетинг на <span className="slide-accent" style={{ fontSize: 30 }}>автономний актив</span>?<br />Напишіть у директ слово
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 28, background: "var(--bone)", color: "var(--forest)", padding: "26px 56px 26px 44px", borderRadius: 22, boxShadow: "0 30px 60px -30px rgba(0,0,0,0.55)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 76, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1 }}>АУДИТ</div>
            <div className="slide-accent" style={{ fontSize: 30, color: "var(--sage)" }}>→</div>
          </div>
        </div>
      </div>
      <div style={{ color: "var(--cream)" }}><SlideFooter index={index} total={total} /></div>
    </div>
  );
}

// ---- Content data ----
const MYTHS = [
  { myth: 1, tone: "sage", title: "«Треба працювати у 2 рази більше»",
    body: <>Робота 24/7 — це ознака того, що бізнес збудований без <strong>автономної архітектури</strong>. Ти створив компанію заради свободи, а найняв себе найдешевшим виконавцем у власну клітку.</>,
    highlight: "Масштаб починається, коли ти закриваєш ноутбук, а система продовжує генерувати гроші." },
  { myth: 2, tone: "cream", title: "«Масштаб — це гігантські бюджети»",
    body: <>Збільшення бюджету на неефективну воронку призводить до <strong>касового розриву</strong>. Підніми конверсію воронки хоча б на <em>1%</em> на кожному етапі — отримаєш більше чистого прибутку, ніж від тупого подвоєння бюджету.</> },
  { myth: 3, tone: "photo", bgImage: "photo-3.jpg", title: "«Особистий бренд — це красива картинка»",
    body: <>Естетичні сніданки та кава в профіль нікому не цікаві. <strong>Преміальний клієнт</strong> купує твої мізки, твою систему координат та твій спокій. Йому байдуже на колір твоєї машини.</>,
    highlight: "Замість глянцю покажіть залізобетонну логіку рішень та оцифровані кейси." },
  { myth: 4, tone: "forest", title: "«Маркетинг — це творчість»",
    body: <>Креатив без аналітики — це <strong>витрата бюджету наосліп</strong>. Маркетинг — це математика й прогнозована інфраструктура. Емоції тут лише одна із змінних у формулі.</>,
    highlight: "Немає чітких показників вартості ліда та LTV — бізнесом керує випадок, а не ти." },
  { myth: 5, tone: "cream", title: "«Агенція під ключ усе вирішить»",
    body: <>Підрядники не створюють стратегію — вони лише <strong>масштабують ті процеси</strong>, які вже є у компанії. Якщо всередині хаос, агенція масштабує хаос за твої ж гроші.</>,
    highlight: "Тобі потрібен не виконавець для тестів, а архітектор, що вибудує внутрішню систему." },
  { myth: 6, tone: "photo", bgImage: "photo-4.jpg", title: "«ШІ не замінить людину»",
    body: <>Правильно налаштований <strong>AI-агент</strong> опрацьовує інформацію та пише тексти за заданою методологією — без вигорання, вихідних та людського фактора.</>,
    highlight: "ШІ не замінить твою особистість. Він просто масштабує твій мозок." },
  { myth: 7, tone: "sage", title: "«Великі чеки — це маніпуляції та прогріви»",
    body: <>Преміум-сегмент купує на основі <strong>точної діагностики</strong>. Достатньо показати власнику оцифровані збитки та дірки, куди протікає поточний бюджет.</>,
    highlight: "Коли людина бачить реальну суму втрат на цифрах — рішення приймається раціонально." },
  { myth: 8, tone: "cream", title: "«Аналітика — складно й тільки для великих»",
    body: <>Без наскрізної аналітики з першого дня бізнес перетворюється на <strong>непередбачувану самозайнятість</strong>. Коли рух кожного долара видно на одному чистому дашборді — зникає невизначеність.</> },
  { myth: 9, tone: "forest", title: "«Головне — постійні нові клієнти»",
    body: <>Фокус лише на нових лідах при ігноруванні діючої бази знижує маржинальність — новий трафік завжди коштує <strong>найдорожче</strong>. Стабільний капітал формується через <em>LTV</em>.</>,
    highlight: "Продуктова лінійка має утримувати клієнта роками." },
];

const TOTAL_SLIDES = 11;

const slideRenderers = [
  (i, t) => <CoverSlide />,
  ...MYTHS.map((m) => (i, t) => (
    <MythSlide mythNumber={m.myth} index={i} total={t} title={m.title} body={m.body} highlight={m.highlight} tone={m.tone} bgImage={m.bgImage} />
  )),
  (i, t) => <CTASlide index={i} total={t} />,
];

Object.assign(window, { CoverSlide, MythSlide, CTASlide, SlideFooter, Spark, MYTHS, TOTAL_SLIDES, slideRenderers });
