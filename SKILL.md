---
name: ksenia-rusnak-design
description: Use this skill to generate well-branded interfaces and assets for Ksenia Rusnak (Ксенія Руснак) — "Quiet Luxury / Forest" — either for production or throwaway prototypes/mocks/Instagram carousels. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`tokens/`, `components/`, `ui_kits/`, `assets/`).

This brand is built around **Instagram carousels** (1080×1440 portrait) and a quiet, editorial forest-green aesthetic. The signature visual vocabulary (forest panels, ghost serif numerals, bracket tags, counter pills, bone quote-boxes) lives in `tokens/slide-system.css` as `.slide-*` classes.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out (`assets/fonts/`, `assets/slides/`, `assets/spark.svg`) and create static HTML files for the user to view — link `styles.css` for tokens + fonts, and reuse the `.slide-*` classes for carousel work. The carousel slide components and content live in `ui_kits/carousel/slides.jsx`.

If working on production code, copy the assets and read the rules here to become an expert in designing with this brand: Ukrainian copy in informal "ти" voice, no emoji, UPPERCASE Calmius display + Cormorant italic accents + Evolventa body, deep greens on warm bone/cream.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few questions (carousel vs web vs deck? Ukrainian or other? which photos?), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
