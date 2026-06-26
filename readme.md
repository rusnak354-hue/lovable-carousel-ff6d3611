# Ksenia Rusnak — Design System
### "Quiet Luxury / Forest"

A brand & UI system for **Ksenia Rusnak (Ксенія Руснак)** — a Ukrainian marketing/business strategist whose content lives primarily as **Instagram carousels** (1080 × 1440 portrait). The flagship artifact in the source material is a 11-slide carousel, *"10 душних міфів про трафік, ШІ та високі чеки"* ("10 stuffy myths about traffic, AI, and high price-tags") — a quiet, editorial manifesto for founders who want to "scale the system, not themselves."

The aesthetic is **quiet luxury**: deep forest greens, sage, warm bone/cream neutrals, moody editorial photography, oversized serif-italic accents against tight uppercase display type. Nothing neon, nothing loud.

### Sources
- **GitHub:** [`rusnak354-hue/lovable-carousel-ff6d3611`](https://github.com/rusnak354-hue/lovable-carousel-ff6d3611) — a Lovable-built carousel editor (React + Tailwind v4). The slide system, color tokens, typography and the entire `.slide-*` class vocabulary are lifted from `src/styles.css` and `src/slides/*`. Explore this repo to build richer carousels or to see the original PNG/PPTX export tooling.
- **Fonts (user-supplied):** Calmius Sans, Evolventa (4 styles), Rozovii Chulok.

> The reader is *not* assumed to have access to the repo — everything needed is vendored into this project — but the link is recorded for deeper work.

---

## CONTENT FUNDAMENTALS

**Language.** Primary copy is **Ukrainian**. Headlines and myth titles are often in **«ялинкові» guillemets** quoting the myth being debunked, e.g. `«Треба працювати у 2 рази більше»`. Brand marks (`ksenia rusnak`, `k · rusnak`, `strategy & growth`) are lowercase Latin.

**Voice.** Direct, confident, a little provocative — a strategist talking to a founder peer, not a guru selling. Addresses the reader as **"ти"** (informal singular "you"): *"Ти створив компанію заради свободи, а найняв себе найдешевшим виконавцем у власну клітку."* Sentences are short, declarative, and land a hard truth, then reframe it.

**Structure of a myth slide.** (1) the myth in quotes → (2) why it's wrong, with one or two **bold** key terms (`автономної архітектури`, `касового розриву`) → (3) a single italic *highlight* takeaway in a bone quote-box.

**Vocabulary.** Business/marketing Ukrainian with deliberate anglicisms left untranslated: `воронка`, `конверсія`, `LTV`, `AI-агент`, `ШІ`, `дашборд`, `касовий розрив`, `преміальний клієнт`, `оцифровані кейси`. Numbers and metrics are concrete (`1%`, `24/7`).

**Casing.** Display headlines are **UPPERCASE** (Calmius Sans). Body is sentence case. Eyebrows/tags are UPPERCASE with wide tracking. Serif accents (Cormorant italic) are lowercase or sentence case.

**Emphasis system.** `<strong>` = the diagnostic term (heavier weight, same font). `<em>` = swaps into **Cormorant Garamond italic**, slightly larger — used for soft, quotable phrases and single metrics.

**Emoji:** none. Ever. Unicode is used only as quiet typographic furniture: `·` (middot separators), `—` (em dashes), `→` (arrows), `«»` (guillemets), `[ ]` (bracket tags).

**Tone words:** quiet, premium, architectural, calm, systematic, autonomous. **Never:** hype, urgency timers, "act now", exclamation marks.

---

## VISUAL FOUNDATIONS

**Palette.** Built on greens + warm neutrals, no cool grays.
- Greens (dark→light): `--forest-deep #1f2a1e`, `--forest #2f3d2e` (primary), `--sage #5e7558`, `--sage-mid #87987a`, `--olive #a3b193`, `--olive-light #c4cdb4`.
- Warm neutrals: `--bone #e9e3d2` (cards/quotes), `--cream #f1ecdd` (text on forest), `--milk #f6f2e7` (page bg), `--ink #1a1f18` (text).
- One muted accent for "alert/like": brick `#8c3a2e`. Used sparingly.
- **Rule:** light text (`cream`) on forest/sage/photo; `ink`/`forest` text on cream/bone/milk.

**Type.** Three voices:
- **Display** — *Calmius Sans Low*, 700, UPPERCASE, tracking `-0.005em`, line-height `0.95`. The loud headline. (Declare the family as `"Calmius Sans Low"` — see DESIGN_RULES §2.)
- **Serif accent** — *Cormorant Garamond*, italic, 500. The "quiet luxury" softness — oversized numerals, the word "та", highlight quotes, ghost numerals.
- **Body / UI** — *Evolventa*, humanist sans, generous tracking (`0.04em`+ on labels, up to `0.5em` on vertical brand rails).
- *Rozovii Chulok* — a decorative script, available for rare flourishes (not used in the source carousel).

**Backgrounds.** Three modes: (1) **solid forest/sage/bone panels**; (2) **full-bleed editorial photo** under a `dark-overlay` (a top→bottom forest gradient `rgba(31,42,30,.35)→.78` that guarantees text contrast); (3) cream/bone light panels. Photography is **dark, warm-cool, cinematic** — muted greens, deep shadows, contemplative portraits and forest scenes. No bright/saturated imagery.

**Decoration (quiet, low-opacity).** Oversized **ghost serif numerals** (`opacity .09`) bleeding off the bottom-right; thin **arc/circle outlines** (`opacity .12–.18`); **corner frames** (1px L-brackets, cover only). Everything decorative is `pointer-events:none`, currentColor, very low opacity. *(DESIGN_RULES §5: the rotated **vertical brand rail**, the footer **brand-mark strip**, and the header **brand-stamp** are retired — inner-slide brand presence is the footer `@ksenia.rusnak` only; section chips stay.)*

**Signature elements.** `sage-chip` (solid sage, uppercase, **14px** radius) · `quote-box` (bone, **sage 3px left rule**, serif italic, **22px**) · `numbered-pill` (serif numeral + body in a bone pill, **22px**) · `grad-plate` (forest→sage gradient highlight, light slides only) · the **footer** (`@ksenia.rusnak` serif italic + hairline + `NN/NN` counter + spark — on every slide except the cover).

**Corners.** *(DESIGN_RULES §3 — locked.)* **One 22px radius for all content plates** — cards, quote-box, numbered/step pills, gradient plate, CTA card, photo frames. **Chips** use 14px. The footer **counter** is the only 999px pill. The older bimodal "sharp 2–4px / full-pill" plate treatment is retired.

**Shadows.** Soft, long, low-opacity drops — never a hard box. `0 30px 60px -36px rgba(26,31,24,.35)`. Photo-borne CTA cards go darker (`-30px / .55`). Light panels get the faint `shadow-card`; the page itself is flat.

**Borders.** Hairlines: `1px` (most) / `1.5px` (decorative arcs). On dark: `rgba(cream,.18)`; on light: `rgba(ink,.12)`. Outline pills use `1px solid currentColor`.

**Spacing.** 8px base. Slides use **DESIGN_RULES §1 safe zones** — top 130 / sides 108 / bottom 220 (working area 864 × 1090). Backgrounds, photos, ghost numerals and corner frames may bleed past; type and brand marks may not. Generous vertical rhythm — content groups separated by 40–64px on the slide canvas.

**Motion.** Calm and minimal. Easing `cubic-bezier(0.22,0.61,0.36,1)` ("quiet"), durations 160/240/420ms. **Hover** = dim to ~0.86 opacity, or fill-invert on outline chips. **Press** = a 1px downward nudge (never a bounce/scale-up). No infinite/decorative loops. Transparency & blur are used only for the photo overlay gradient — no glassmorphism.

---

## ICONOGRAPHY

The brand is **near-iconless** by design — quiet luxury leans on type and rules, not UI glyphs. What exists:
- **The Spark** (`assets/spark.svg`) — a 4-point sparkle/star, the single brand glyph (from the repo's `Spark.tsx`). Fill `currentColor`. Use as a rare accent/bullet.
- **Typographic "icons":** `→` (CTA arrows), `·` middot separators, `—` em-dash dividers, `[ ]` bracket tags, `«»` guillemets. These do the work icons would.
- **Line icons (UI only):** the carousel viewer's Instagram action row (heart/comment/share) uses inline 1.8px-stroke SVG paths in the editorial style. For broader UI needs, substitute **Lucide** (CDN, `stroke-width:1.8`, rounded) — it matches the thin, calm line weight. *(Flagged substitution — the source brand ships no icon set.)*
- **No emoji, no filled icon sets, no colored icons.**

---

## INDEX (manifest)

> **Carousel production rules:** `guidelines/DESIGN_RULES.md` consolidates the locked decisions for carousel artifacts (safe zones, 22px plates, footer, no repeated chrome, light-slide variation, editable-PPTX export). **It wins over older guidance for carousels.**

**Foundations**
- `styles.css` — single entry point (consumers link this). `@import`s everything below.
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `slide-system.css`
- `guidelines/*.card.html` — foundation specimen cards (Type, Colors, Spacing, Brand).
- `guidelines/DESIGN_RULES.md` — production-locked carousel rules (authoritative for carousels).

**Components** (`window.KseniaRusnakDesignSystem_da027f`)
- `components/core/` — **Button**, **Badge**, **Card**, **Input**
- `components/brand/` — **QuoteBox**, **NumberedPill**, **CounterPill**

**UI kits**
- `ui_kits/carousel/` — the Instagram carousel (cover + 9 myth variants + CTA), shown in an interactive in-feed viewer. `slides.jsx` holds the slide components + content.
- `ui_kits/editor/` — the carousel **editor** app surface (thumbnail rail + canvas + export header).

**Assets**
- `assets/fonts/` — Calmius Sans, Evolventa (4), Rozovii Chulok.
- `assets/slides/` — 8 editorial photos (cover, photo-1…6, cta).
- `assets/spark.svg` — brand glyph.

**Other**
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.
- `templates/` — copy-ready carousel starting point (`.dc.html`).

> ⚠️ **Note on previews:** the Design System tab cards and component cards style themselves from the compiled `styles.css` + `_ds_bundle.js`, which the system builds at the end of each turn. Cards may appear unstyled in mid-edit previews and resolve once compiled.
