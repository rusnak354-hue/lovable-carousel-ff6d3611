# Ksenia Rusnak — Carousel Design Rules

> Consolidated rules for the Instagram-carousel artifacts (1080 × 1440, 3:4 portrait).
> This document extends the base "Quiet Luxury / Forest" design system with the
> decisions locked in during production. When a rule here conflicts with older
> guidance, **this document wins** for carousels.

---

## 1. Format & safe zones

- **Canvas:** 1080 × 1440 px (3:4 portrait).
- **Safe zones** (keep all critical content — text, logos, CTA, counter — inside):
  - Top: **130 px**
  - Bottom: **220 px**
  - Sides: **108 px**
  - → **working area = 864 × 1090 px**
- Backgrounds, photos, ghost numerals, watermark words and corner frames **may bleed**
  past the safe zone. Type and interactive/brand marks **may not**.

```css
.slide-padding {
  position: absolute;
  inset: 130px 108px 220px 108px; /* top right/left handled, bottom */
}
```

---

## 2. Typography

- **Display font is `Calmius Sans Low`** (NOT "Calmius Sans"). Use the
  `CalmiusSansLow*` font files; declare the family name as `"Calmius Sans Low"`.
- Serif accent: **Cormorant Garamond** italic (falls back to Times New Roman).
- Body / UI: **Evolventa**.
- Minimum on-canvas type size at 1080×1440: ~24 px. Display headlines are large
  and UPPERCASE; serif accents are lowercase italic.

```css
--font-display: "Calmius Sans Low", "Evolventa", sans-serif;
```

---

## 3. Plates & corners

**Use one rounded-rectangle radius for all content plates — no full pills, no sharp corners.**

| Element | Radius |
|---|---|
| Content plates — cards, quote-box, numbered/step pills, gradient plate, CTA card, photo frames | **22 px** |
| Chips / eyebrow labels (`.sage-chip`) | **14 px** |
| Counter pill (small footer furniture only) | 999 px (compact pill) |
| Decorative arcs/circles, avatars | unchanged |

- Do **not** use full `999px` pills for content plates anymore (previous versions did).
- Do **not** use the old sharp 2–4 px editorial corners on plates.

---

## 4. Footer (every slide EXCEPT the cover)

A single footer row, positioned **108 px from the bottom edge**, full safe-zone width:

- **Left:** `@ksenia.rusnak` (serif italic, `--font-serif`).
- **Middle:** thin hairline rule (flex-fill, `currentColor`, ~0.32 opacity).
- **Right:** slide counter in the compact pill, format **`NN/NN`** (e.g. `02/06`),
  followed by a short hairline and the **Spark** glyph (4-point sparkle, `currentColor`).
- Inherits the slide's foreground color (cream on dark/photo, ink/forest on light).
- **The cover never shows the footer.**

```jsx
<div className="slide-chrome" style={{ position:"absolute", left:108, right:108, bottom:108,
  display:"flex", alignItems:"center", gap:20 }}>
  <span className="footer-handle">@ksenia.rusnak</span>
  <span className="footer-rule" />
  <span className="counter-pill">{nn}/{total}</span>
  <span className="footer-rule footer-rule--short" />
  <Spark size={20} />
</div>
```

---

## 5. No repeated brand chrome on slides

Remove per-slide brand repetition. Specifically **do not use**:

- the rotated **vertical brand rail** (`k · rusnak` / topic word down the edge),
- the footer **brand-mark** strip (`k · rusnak — strategy & growth`),
- the header **brand-stamp** signature (`ksenia rusnak` in the top-right of each slide).

Brand presence on inner slides is carried by the **footer `@ksenia.rusnak`** only.
Section chips (top-left) stay.

---

## 6. Light-slide variation

A light slide is a sanctioned variation for rhythm:

- **Background:** `#FFFBF3` or `#FFFFFF`.
- **Green gradient glow** `#4D946D` placed in varying positions (e.g. top-right and
  bottom-left), as soft radial gradients that fade to transparent.
- **Highlight plate** on a light slide may be a **forest→sage gradient plate**
  (dark green) with cream text — the only place a gradient *fill* is used.

```css
.slide-bg-light-grad {
  background-color: #FFFBF3;
  background-image:
    radial-gradient(78% 58% at 100% 2%, rgba(77,148,109,0.55) 0%, rgba(77,148,109,0.16) 40%, rgba(77,148,109,0) 66%),
    radial-gradient(64% 52% at -4% 102%, rgba(77,148,109,0.34) 0%, rgba(77,148,109,0) 56%);
  color: var(--ink);
}
.grad-plate { /* highlight on light slides */
  background: linear-gradient(135deg, var(--forest) 0%, var(--sage) 82%, var(--olive) 132%);
  color: var(--cream);
  border-radius: 22px;
}
```

---

## 7. Photography

- Use **whole/full photos or cut-out (no-background) photos** as content elements,
  framed in **22 px rounded** containers (with the standard soft long shadow).
- The **cover uses a full-bleed photo background** under the dark gradient overlay.
- Cut-out (transparent-PNG) subjects may float as standalone elements when supplied.
- Imagery stays dark, warm, cinematic — no bright/saturated stock.

---

## 8. Editable PPTX export

- Export to PPTX with **native editable text & shapes** (not flat screenshots).
- **Keep brand fonts** as named in the system: **Calmius Sans Low** and **Evolventa**
  (these must be installed on the machine that opens the file, or PowerPoint
  substitutes a system font).
- Photos are embedded as images. Slide size matches the 1080 × 1440 canvas.

---

## 9. Cover

- Full-bleed photo background + dark overlay; corner frames may bleed.
- Section chip top-left; headline + lede in the lower half.
- **No footer, no counter** on the cover.
