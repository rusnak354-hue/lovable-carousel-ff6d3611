import PptxGenJS from "pptxgenjs";
import photo3 from "@/assets/slides/photo-3.jpg";
import photo4 from "@/assets/slides/photo-4.jpg";
import coverBg from "@/assets/slides/cover-bg.jpg";
import ctaBg from "@/assets/slides/photo-cta.jpg";

// Layout: 1080x1440 px @ 96dpi = 11.25" x 15"
const W = 11.25;
const H = 15;

const COLOR = {
  forest: "2F4A3A",
  sage: "5B7A6A",
  cream: "FFFBF3",
  ink: "111111",
  olive: "B8C5A8",
};

const FONT_DISPLAY = "Georgia"; // Canva has Georgia; user can swap to brand font
const FONT_BODY = "Helvetica Neue";

type Tone = "forest" | "sage" | "cream" | "photo";

interface RichSeg {
  text: string;
  bold?: boolean;
  italic?: boolean;
}

interface PptxSlide {
  kind: "cover" | "myth" | "cta";
  tone: Tone;
  bgImage?: string;
  mythNumber?: number;
  index: number; // 1-based
  total: number;
  title?: string;
  bodySegs?: RichSeg[];
  highlight?: string;
  // cover only
  bigNumber?: string;
  subhead?: string;
  subtitle?: string;
  // cta only
  ctaPre?: string;
  ctaWord?: string;
}

const TOTAL = 11;

const slides: PptxSlide[] = [
  {
    kind: "cover",
    tone: "photo",
    bgImage: coverBg,
    index: 1,
    total: TOTAL,
    bigNumber: "10",
    subhead: "розборів душних міфів",
    subtitle: "про трафік, ШІ та високі чеки",
  },
  {
    kind: "myth", tone: "sage", mythNumber: 1, index: 2, total: TOTAL,
    title: "«Треба працювати у 2 рази більше»",
    bodySegs: [
      { text: "Робота 24/7 — це ознака того, що бізнес збудований без " },
      { text: "автономної архітектури", bold: true },
      { text: ". Ти створив компанію заради свободи, а найняв себе найдешевшим виконавцем у власну клітку." },
    ],
    highlight: "Масштаб починається, коли ти закриваєш ноутбук, а система продовжує генерувати гроші.",
  },
  {
    kind: "myth", tone: "cream", mythNumber: 2, index: 3, total: TOTAL,
    title: "«Масштаб — це гігантські бюджети»",
    bodySegs: [
      { text: "Збільшення бюджету на неефективну воронку призводить до " },
      { text: "касового розриву", bold: true },
      { text: ". Підніми конверсію воронки хоча б на " },
      { text: "1%", italic: true },
      { text: " на кожному етапі — отримаєш більше чистого прибутку, ніж від тупого подвоєння бюджету." },
    ],
  },
  {
    kind: "myth", tone: "photo", bgImage: photo3, mythNumber: 3, index: 4, total: TOTAL,
    title: "«Особистий бренд — це красива картинка»",
    bodySegs: [
      { text: "Естетичні сніданки та кава в профіль нікому не цікаві. " },
      { text: "Преміальний клієнт", bold: true },
      { text: " купує твої мізки, твою систему координат та твій спокій. Йому байдуже на колір твоєї машини." },
    ],
    highlight: "Замість глянцю покажіть залізобетонну логіку рішень та оцифровані кейси.",
  },
  {
    kind: "myth", tone: "forest", mythNumber: 4, index: 5, total: TOTAL,
    title: "«Маркетинг — це творчість»",
    bodySegs: [
      { text: "Креатив без аналітики — це " },
      { text: "витрата бюджету наосліп", bold: true },
      { text: ". Маркетинг — це математика й прогнозована інфраструктура. Емоції тут лише одна із змінних у формулі." },
    ],
    highlight: "Немає чітких показників вартості ліда та LTV — бізнесом керує випадок, а не ти.",
  },
  {
    kind: "myth", tone: "cream", mythNumber: 5, index: 6, total: TOTAL,
    title: "«Агенція під ключ усе вирішить»",
    bodySegs: [
      { text: "Підрядники не створюють стратегію — вони лише " },
      { text: "масштабують ті процеси", bold: true },
      { text: ", які вже є у компанії. Якщо всередині хаос, агенція масштабує хаос за твої ж гроші." },
    ],
    highlight: "Тобі потрібен не виконавець для тестів, а архітектор, що вибудує внутрішню систему.",
  },
  {
    kind: "myth", tone: "photo", bgImage: photo4, mythNumber: 6, index: 7, total: TOTAL,
    title: "«ШІ не замінить людину»",
    bodySegs: [
      { text: "Правильно налаштований " },
      { text: "AI-агент", bold: true },
      { text: " опрацьовує інформацію та пише тексти за заданою методологією — без вигорання, вихідних та людського фактора." },
    ],
    highlight: "ШІ не замінить твою особистість. Він просто масштабує твій мозок.",
  },
  {
    kind: "myth", tone: "sage", mythNumber: 7, index: 8, total: TOTAL,
    title: "«Великі чеки — це маніпуляції та прогріви»",
    bodySegs: [
      { text: "Преміум-сегмент купує на основі " },
      { text: "точної діагностики", bold: true },
      { text: ". Достатньо показати власнику оцифровані збитки та дірки, куди протікає поточний бюджет." },
    ],
    highlight: "Коли людина бачить реальну суму втрат на цифрах — рішення приймається раціонально.",
  },
  {
    kind: "myth", tone: "cream", mythNumber: 8, index: 9, total: TOTAL,
    title: "«Аналітика — складно й тільки для великих»",
    bodySegs: [
      { text: "Без наскрізної аналітики з першого дня бізнес перетворюється на " },
      { text: "непередбачувану самозайнятість", bold: true },
      { text: ". Коли рух кожного долара видно на одному чистому дашборді — зникає невизначеність." },
    ],
  },
  {
    kind: "myth", tone: "forest", mythNumber: 9, index: 10, total: TOTAL,
    title: "«Головне — постійні нові клієнти»",
    bodySegs: [
      { text: "Фокус лише на нових лідах при ігноруванні діючої бази знижує маржинальність — новий трафік завжди коштує " },
      { text: "найдорожче", bold: true },
      { text: ". Стабільний капітал формується через " },
      { text: "LTV", italic: true },
      { text: "." },
    ],
    highlight: "Продуктова лінійка має утримувати клієнта роками.",
  },
  {
    kind: "cta", tone: "photo", bgImage: ctaBg, mythNumber: 10, index: 11, total: TOTAL,
    title: "Власник має контролювати все",
    bodySegs: [
      { text: "Мікроменеджмент власника — це головне гальмо для зростання компанії. " },
      { text: "Завдання фаундера — стратегія та візія.", bold: true },
    ],
    ctaPre: "Хочете перетворити маркетинг на автономний актив?\nНапишіть у директ слово",
    ctaWord: "АУДИТ",
  },
];

async function fetchImageDataUrl(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  return await new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result as string);
    r.onerror = reject;
    r.readAsDataURL(blob);
  });
}

function pad2(n: number) { return String(n).padStart(2, "0"); }

function bodyParaToTextProps(segs: RichSeg[], color: string) {
  return segs.map((s) => ({
    text: s.text,
    options: { bold: !!s.bold, italic: !!s.italic, color },
  }));
}

export async function buildTextPptx(): Promise<void> {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "IG_1080x1440", width: W, height: H });
  pptx.layout = "IG_1080x1440";
  pptx.title = "Ксенія Руснак — 10 міфів";

  // Pre-fetch images
  const imageCache = new Map<string, string>();
  for (const s of slides) {
    if (s.bgImage && !imageCache.has(s.bgImage)) {
      imageCache.set(s.bgImage, await fetchImageDataUrl(s.bgImage));
    }
  }

  for (const s of slides) {
    const slide = pptx.addSlide();
    const isLight = s.tone !== "cream";
    const fg = isLight ? COLOR.cream : COLOR.ink;

    // Background
    if (s.tone === "photo" && s.bgImage) {
      slide.background = { data: imageCache.get(s.bgImage)! };
      // Dark overlay
      slide.addShape("rect", {
        x: 0, y: 0, w: W, h: H,
        fill: { color: "141E19", transparency: 40 },
        line: { type: "none" },
      });
    } else if (s.tone === "forest") {
      slide.background = { color: COLOR.forest };
    } else if (s.tone === "sage") {
      slide.background = { color: COLOR.sage };
    } else {
      slide.background = { color: COLOR.cream };
    }

    // Top tag
    const tagText = s.kind === "cover" ? "[карусель]"
      : s.kind === "cta" ? `[міф ${pad2(s.mythNumber!)}]`
      : `[міф ${pad2(s.mythNumber!)}]`;

    slide.addText(tagText, {
      x: 0.55, y: 0.55, w: 4, h: 0.4,
      fontFace: FONT_BODY, fontSize: 14, color: fg, charSpacing: 2,
    });

    if (s.kind === "cover") {
      slide.addText("[ksenia rusnak]", {
        x: W - 4.55, y: 0.55, w: 4, h: 0.4, align: "right",
        fontFace: FONT_BODY, fontSize: 14, color: fg, charSpacing: 2,
      });
    }

    if (s.kind === "cover") {
      slide.addText(s.bigNumber!, {
        x: 0.4, y: 4.5, w: W - 0.8, h: 6.2,
        fontFace: FONT_DISPLAY, fontSize: 480, bold: true,
        color: fg, align: "left", valign: "middle",
      });
      slide.addText(s.subhead!, {
        x: 0.55, y: 11, w: W - 1.1, h: 1.6,
        fontFace: FONT_DISPLAY, fontSize: 64, bold: true,
        color: fg, align: "left",
      });
      slide.addText(s.subtitle!, {
        x: 0.55, y: 12.8, w: W - 1.1, h: 0.8,
        fontFace: FONT_BODY, fontSize: 22, color: fg, align: "left",
      });
    } else if (s.kind === "myth") {
      // Ghost numeral
      slide.addText(pad2(s.mythNumber!), {
        x: 2, y: 6, w: W - 2, h: 9,
        fontFace: FONT_DISPLAY, fontSize: 600, bold: true,
        color: isLight ? COLOR.cream : COLOR.sage,
        transparency: 92, align: "right", valign: "middle",
      });

      slide.addText(s.title!, {
        x: 0.55, y: 1.6, w: W - 1.1, h: 3.2,
        fontFace: FONT_DISPLAY, fontSize: 54, bold: true,
        color: fg, align: "left", valign: "top",
      });

      slide.addText(bodyParaToTextProps(s.bodySegs!, fg), {
        x: 0.55, y: 5.2, w: W - 1.1, h: 5.2,
        fontFace: FONT_BODY, fontSize: 22, color: fg,
        align: "left", valign: "top", paraSpaceAfter: 6,
      });

      if (s.highlight) {
        slide.addShape("roundRect", {
          x: 0.55, y: 11.2, w: W - 1.1, h: 2.4,
          fill: { color: COLOR.cream }, line: { type: "none" },
          rectRadius: 0.15,
        });
        slide.addText(s.highlight, {
          x: 0.85, y: 11.4, w: W - 1.7, h: 2.0,
          fontFace: FONT_BODY, fontSize: 22, bold: true,
          color: COLOR.ink, align: "left", valign: "middle",
        });
      }
    } else if (s.kind === "cta") {
      slide.addText(s.title!, {
        x: 0.55, y: 1.6, w: W - 1.1, h: 2.4,
        fontFace: FONT_DISPLAY, fontSize: 52, bold: true,
        color: fg, align: "left", valign: "top",
      });
      slide.addText(bodyParaToTextProps(s.bodySegs!, fg), {
        x: 0.55, y: 4.4, w: W - 1.1, h: 2.4,
        fontFace: FONT_BODY, fontSize: 22, color: fg,
        align: "left", valign: "top",
      });
      slide.addText(s.ctaPre!, {
        x: 0.55, y: 9.5, w: W - 1.1, h: 1.8,
        fontFace: FONT_BODY, fontSize: 20, color: fg, align: "left",
      });
      slide.addShape("roundRect", {
        x: 0.55, y: 11.6, w: 5.6, h: 1.9,
        fill: { color: COLOR.cream }, line: { type: "none" },
        rectRadius: 0.18,
      });
      slide.addText(s.ctaWord!, {
        x: 0.55, y: 11.6, w: 5.6, h: 1.9,
        fontFace: FONT_DISPLAY, fontSize: 64, bold: true,
        color: COLOR.forest, align: "center", valign: "middle",
        charSpacing: 4,
      });
    }

    // Counter pill (bottom right)
    if (s.kind !== "cover") {
      slide.addText(`${pad2(s.index)}/${pad2(s.total)}`, {
        x: W - 2.2, y: H - 0.95, w: 1.7, h: 0.5,
        fontFace: FONT_BODY, fontSize: 14, color: fg, align: "right",
        charSpacing: 3,
      });
    }
  }

  await pptx.writeFile({ fileName: "ksenia-rusnak-carousel-edit.pptx" });
}