/* @ds-bundle: {"format":3,"namespace":"KseniaRusnakDesignSystem_da027f","components":[{"name":"CounterPill","sourcePath":"components/brand/CounterPill.jsx"},{"name":"NumberedPill","sourcePath":"components/brand/NumberedPill.jsx"},{"name":"QuoteBox","sourcePath":"components/brand/QuoteBox.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/brand/CounterPill.jsx":"70712f557d85","components/brand/NumberedPill.jsx":"1fd542bf6512","components/brand/QuoteBox.jsx":"2c54cbe46073","components/core/Badge.jsx":"019a2381ff73","components/core/Button.jsx":"8d2da5693ac5","components/core/Card.jsx":"1f57b5c55232","components/core/Input.jsx":"6b4483f00bb3","ui_kits/carousel/slides.jsx":"b004997fd590"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KseniaRusnakDesignSystem_da027f = window.KseniaRusnakDesignSystem_da027f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/CounterPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CounterPill — the slide pagination mark: hairline pill with
 * "current / total" in spaced body type. Inherits color from context.
 */
function CounterPill({
  index,
  total,
  style = {},
  ...rest
}) {
  const fmt = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 20,
      letterSpacing: "0.24em",
      padding: "12px 26px",
      border: "1px solid currentColor",
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      opacity: 0.85,
      color: "currentColor",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, fmt(index)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 24,
      height: 1,
      background: "currentColor",
      opacity: 0.45,
      margin: "0 4px 4px"
    }
  }), /*#__PURE__*/React.createElement("span", null, fmt(total)));
}
Object.assign(__ds_scope, { CounterPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CounterPill.jsx", error: String((e && e.message) || e) }); }

// components/brand/NumberedPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumberedPill — serif italic numeral + body text in a rounded pill.
 * Used for ordered lists / steps on slides. Light (bone) or dark (forest).
 */
function NumberedPill({
  number,
  children,
  tone = "light",
  style = {},
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22,
      padding: "22px 32px",
      background: dark ? "var(--forest-deep)" : "var(--bone)",
      color: dark ? "var(--cream)" : "var(--ink)",
      borderRadius: "var(--radius-plate)",
      boxShadow: "var(--shadow-soft)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: 44,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      minWidth: 64
    }
  }, number, "."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 22,
      lineHeight: 1.35,
      letterSpacing: "0.01em"
    }
  }, children));
}
Object.assign(__ds_scope, { NumberedPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NumberedPill.jsx", error: String((e && e.message) || e) }); }

// components/brand/QuoteBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * QuoteBox — the signature pull-quote: bone surface, sage left rule,
 * serif italic. Used for the "highlight" line on myth slides.
 */
function QuoteBox({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: "var(--bone)",
      color: "var(--ink)",
      borderRadius: "var(--radius-plate)",
      padding: "40px 44px 40px 56px",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: 36,
      lineHeight: 1.3,
      boxShadow: "var(--shadow-quote)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      bottom: 16,
      width: 3,
      background: "var(--sage)",
      borderRadius: 2
    }
  }), children);
}
Object.assign(__ds_scope, { QuoteBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/QuoteBox.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small label. Three brand treatments:
 *  - "chip"    → solid sage block, uppercase, wide tracking (the "sage-chip")
 *  - "bracket" → [ bracketed ] body label
 *  - "outline" → hairline pill (the "tag-pill")
 */
function Badge({
  children,
  variant = "chip",
  tone = "auto",
  style = {},
  ...rest
}) {
  const toneColor = tone === "dark" ? "var(--forest)" : tone === "light" ? "var(--cream)" : "currentColor";
  if (variant === "chip") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 20px",
        background: "var(--sage-mid)",
        color: "var(--cream)",
        borderRadius: "var(--radius-xs)",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        ...style
      }
    }, rest), children);
  }
  if (variant === "bracket") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 15,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: toneColor,
        opacity: 0.9,
        ...style
      }
    }, rest), "[", children, "]");
  }

  // outline pill
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "8px 18px",
      border: "1px solid currentColor",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      letterSpacing: "0.04em",
      color: toneColor,
      background: "transparent",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Ksenia Rusnak primary action.
 * Quiet-luxury: forest fill, generous tracking, sharp 4px corners (or pill).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: 13,
      letterSpacing: "0.14em"
    },
    md: {
      padding: "12px 26px",
      fontSize: 14,
      letterSpacing: "0.16em"
    },
    lg: {
      padding: "16px 34px",
      fontSize: 16,
      letterSpacing: "0.18em"
    }
  };
  const variants = {
    primary: {
      background: "var(--forest)",
      color: "var(--cream)",
      border: "1px solid var(--forest)"
    },
    secondary: {
      background: "var(--sage-mid)",
      color: "var(--cream)",
      border: "1px solid var(--sage-mid)"
    },
    outline: {
      background: "transparent",
      color: "var(--forest)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--forest)",
      border: "1px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    textTransform: "uppercase",
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "opacity var(--dur-base) var(--ease-quiet), transform var(--dur-fast) var(--ease-quiet)",
    lineHeight: 1,
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translateY(0)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.opacity = disabled ? 0.45 : 1;
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = 0.86;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container. Two brand treatments:
 *  - "soft"  → milk surface, 18px radius, hairline border, long soft shadow (calendar-card)
 *  - "sharp" → bone surface, 4px radius (editorial)
 */
function Card({
  children,
  variant = "soft",
  style = {},
  ...rest
}) {
  const variants = {
    soft: {
      background: "var(--milk)",
      color: "var(--ink)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)",
      padding: "28px 32px",
      boxShadow: "var(--shadow-card)"
    },
    sharp: {
      background: "var(--bone)",
      color: "var(--ink)",
      borderRadius: "var(--radius-sm)",
      border: "1px solid transparent",
      padding: "28px 32px",
      boxShadow: "var(--shadow-soft)"
    },
    forest: {
      background: "var(--forest-deep)",
      color: "var(--cream)",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--hairline-dark)",
      padding: "28px 32px",
      boxShadow: "var(--shadow-card)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with a quiet uppercase label.
 * Hairline underline-forward editorial style on the milk surface.
 */
function Input({
  label,
  hint,
  type = "text",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--ink)",
      background: "var(--bg-raised)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-sm)",
      padding: "12px 14px",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-quiet)",
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--ring)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      opacity: 0.8
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/carousel/slides.jsx
try { (() => {
// Ksenia Rusnak — carousel slide components (self-contained, window-exported)
// Conforms to guidelines/DESIGN_RULES.md (production-locked):
//   §1 safe zones (130/108/220)   §3 22px plates   §4 footer (@handle · NN/NN · spark)
//   §5 no repeated brand chrome    §6 light-grad slides    §7 22px photo frames
// Uses the .slide-* classes from styles.css and assets at ../../assets/slides/.

const ASSETS = "../../assets/slides";

// The Spark glyph (4-point sparkle) — inline so it always paints; currentColor.
function Spark({
  size = 24,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    className: className,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 0 C17 11 21 15 32 16 C21 17 17 21 16 32 C15 21 11 17 0 16 C11 15 15 11 16 0 Z",
    fill: "currentColor"
  }));
}

// §4 Footer — every slide EXCEPT the cover. Inherits currentColor.
function SlideFooter({
  index,
  total
}) {
  const fmt = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    className: "slide-footer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer-handle"
  }, "@ksenia.rusnak"), /*#__PURE__*/React.createElement("span", {
    className: "footer-rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "footer-counter"
  }, fmt(index), "/", fmt(total)), /*#__PURE__*/React.createElement("span", {
    className: "footer-rule footer-rule--short"
  }), /*#__PURE__*/React.createElement(Spark, {
    size: 24,
    className: "footer-spark"
  }));
}
function Chip({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "sage-chip"
  }, children);
}

// ---- Cover (§9: full-bleed photo, chip top-left, headline lower half, NO footer) ----
function CoverSlide() {
  return /*#__PURE__*/React.createElement("div", {
    className: "slide dark-overlay",
    style: {
      background: `url(${ASSETS}/cover-bg.jpg) center/cover`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "corner-frame",
    style: {
      left: 56,
      top: 56,
      color: "var(--cream)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "corner-frame",
    style: {
      right: 56,
      bottom: 56,
      color: "var(--cream)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "slide-padding",
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement(Chip, null, "\u043A\u0430\u0440\u0443\u0441\u0435\u043B\u044C \xB7 n.01"), /*#__PURE__*/React.createElement("div", {
    className: "tag-bracket",
    style: {
      marginTop: 4,
      fontSize: 18,
      letterSpacing: "0.28em"
    }
  }, "strategy & growth \xB7 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 28,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "slash-divider",
    style: {
      width: 96,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tag-bracket",
    style: {
      opacity: 0.8
    }
  }, "\u0440\u043E\u0437\u0431\u0456\u0440 \u043C\u0456\u0444\u0456\u0432")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slide-accent",
    style: {
      fontSize: 540,
      lineHeight: 0.82,
      letterSpacing: "-0.05em"
    }
  }, "10"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slide-accent",
    style: {
      fontSize: 80,
      lineHeight: 0.95,
      opacity: 0.92
    }
  }, "\u0434\u0443\u0448\u043D\u0438\u0445"))), /*#__PURE__*/React.createElement("div", {
    className: "slide-title",
    style: {
      fontSize: 92,
      marginTop: 24,
      lineHeight: 0.98
    }
  }, "\u043C\u0456\u0444\u0456\u0432 \u043F\u0440\u043E ", /*#__PURE__*/React.createElement("br", null), "\u0442\u0440\u0430\u0444\u0456\u043A, \u0428\u0406", /*#__PURE__*/React.createElement("span", {
    className: "slide-accent",
    style: {
      fontSize: 92,
      textTransform: "lowercase"
    }
  }, " \u0442\u0430 "), "\u0432\u0438\u0441\u043E\u043A\u0456 \u0447\u0435\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      fontFamily: "var(--font-body)",
      fontSize: 26,
      opacity: 0.85,
      maxWidth: 720,
      lineHeight: 1.4,
      letterSpacing: "0.04em"
    }
  }, "\u0442\u0438\u0445\u0438\u0439 \u043C\u0430\u043D\u0456\u0444\u0435\u0441\u0442 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0430, \u0449\u043E \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0454 \u043D\u0435 \u0441\u0435\u0431\u0435, \u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0443."))));
}

// ---- Myth ----
function MythSlide({
  mythNumber,
  index,
  total,
  title,
  body,
  highlight,
  tone,
  bgImage
}) {
  const isPhoto = tone === "photo";
  const isLight = tone === "cream";
  const bgClass = tone === "forest" ? "slide-bg-forest" : tone === "sage" ? "slide-bg-sage" : isLight ? "slide-bg-light-grad" : "";
  const fmt = n => String(n).padStart(2, "0");
  const lightText = !isLight;
  const fg = lightText ? "var(--cream)" : "var(--ink)";
  const ghostColor = lightText ? "var(--cream)" : "var(--sage-mid)";
  return /*#__PURE__*/React.createElement("div", {
    className: `slide ${bgClass} ${isPhoto ? "dark-overlay" : ""}`,
    style: isPhoto && bgImage ? {
      background: `url(${ASSETS}/${bgImage}) center/cover`
    } : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "ghost-numeral",
    style: {
      right: -80,
      bottom: -200,
      color: ghostColor
    }
  }, fmt(mythNumber)), /*#__PURE__*/React.createElement("div", {
    className: "arc-deco",
    style: {
      width: 1400,
      height: 1400,
      left: -520,
      top: -480,
      color: ghostColor
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "arc-deco",
    style: {
      width: 320,
      height: 320,
      left: 120,
      top: 120,
      color: ghostColor,
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "slide-padding",
    style: {
      color: fg
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Chip, null, "\u043C\u0456\u0444 \xB7 ", fmt(mythNumber))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      maxWidth: 940
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slide-accent",
    style: {
      fontSize: 38,
      opacity: 0.75,
      marginBottom: 18
    }
  }, "\u043C\u0456\u0444 \u043D\u043E\u043C\u0435\u0440", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 38,
      marginLeft: 16
    }
  }, fmt(mythNumber))), /*#__PURE__*/React.createElement("h2", {
    className: "slide-title",
    style: {
      fontSize: 84,
      lineHeight: 0.98
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "slide-body",
    style: {
      marginTop: 48,
      maxWidth: 940,
      opacity: lightText ? 0.94 : 1
    }
  }, body), highlight && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      maxWidth: 880
    }
  }, isLight ? /*#__PURE__*/React.createElement("div", {
    className: "grad-plate",
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: 36,
      lineHeight: 1.3
    }
  }, highlight) : /*#__PURE__*/React.createElement("div", {
    className: "quote-box"
  }, highlight))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: fg
    }
  }, /*#__PURE__*/React.createElement(SlideFooter, {
    index: index,
    total: total
  })));
}

// ---- CTA ----
function CTASlide({
  index,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "slide dark-overlay",
    style: {
      background: `url(${ASSETS}/photo-cta.jpg) center/cover`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "corner-frame",
    style: {
      left: 56,
      top: 56,
      color: "var(--cream)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "slide-padding",
    style: {
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Chip, null, "\u043C\u0456\u0444 \xB7 10 \u2014 \u0444\u0456\u043D\u0430\u043B")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "slide-accent",
    style: {
      fontSize: 40,
      opacity: 0.8,
      marginBottom: 14
    }
  }, "\u0432\u043B\u0430\u0441\u043D\u0438\u043A"), /*#__PURE__*/React.createElement("h2", {
    className: "slide-title",
    style: {
      fontSize: 88,
      lineHeight: 0.98
    }
  }, "\u043C\u0430\u0454 ", /*#__PURE__*/React.createElement("span", {
    className: "slide-accent",
    style: {
      fontSize: 88
    }
  }, "\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438"), /*#__PURE__*/React.createElement("br", null), "\u0432\u0441\u0435")), /*#__PURE__*/React.createElement("p", {
    className: "slide-body",
    style: {
      marginTop: 40,
      maxWidth: 900
    }
  }, "\u041C\u0456\u043A\u0440\u043E\u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0430 \u2014 \u0446\u0435 \u0433\u043E\u043B\u043E\u0432\u043D\u0435 \u0433\u0430\u043B\u044C\u043C\u043E \u0434\u043B\u044F \u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457. ", /*#__PURE__*/React.createElement("strong", null, "\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0444\u0430\u0443\u043D\u0434\u0435\u0440\u0430 \u2014 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044F \u0442\u0430 \u0432\u0456\u0437\u0456\u044F.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 26,
      opacity: 0.9,
      marginBottom: 24,
      lineHeight: 1.4,
      maxWidth: 760,
      letterSpacing: "0.02em"
    }
  }, "\u0425\u043E\u0447\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u043D\u0430 ", /*#__PURE__*/React.createElement("span", {
    className: "slide-accent",
    style: {
      fontSize: 30
    }
  }, "\u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0438\u0439 \u0430\u043A\u0442\u0438\u0432"), "?", /*#__PURE__*/React.createElement("br", null), "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0443 \u0434\u0438\u0440\u0435\u043A\u0442 \u0441\u043B\u043E\u0432\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 28,
      background: "var(--bone)",
      color: "var(--forest)",
      padding: "26px 56px 26px 44px",
      borderRadius: 22,
      boxShadow: "0 30px 60px -30px rgba(0,0,0,0.55)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 76,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      lineHeight: 1
    }
  }, "\u0410\u0423\u0414\u0418\u0422"), /*#__PURE__*/React.createElement("div", {
    className: "slide-accent",
    style: {
      fontSize: 30,
      color: "var(--sage)"
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement(SlideFooter, {
    index: index,
    total: total
  })));
}

// ---- Content data ----
const MYTHS = [{
  myth: 1,
  tone: "sage",
  title: "«Треба працювати у 2 рази більше»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0420\u043E\u0431\u043E\u0442\u0430 24/7 \u2014 \u0446\u0435 \u043E\u0437\u043D\u0430\u043A\u0430 \u0442\u043E\u0433\u043E, \u0449\u043E \u0431\u0456\u0437\u043D\u0435\u0441 \u0437\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0431\u0435\u0437 ", /*#__PURE__*/React.createElement("strong", null, "\u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0457 \u0430\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u0438"), ". \u0422\u0438 \u0441\u0442\u0432\u043E\u0440\u0438\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0437\u0430\u0440\u0430\u0434\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u0438, \u0430 \u043D\u0430\u0439\u043D\u044F\u0432 \u0441\u0435\u0431\u0435 \u043D\u0430\u0439\u0434\u0435\u0448\u0435\u0432\u0448\u0438\u043C \u0432\u0438\u043A\u043E\u043D\u0430\u0432\u0446\u0435\u043C \u0443 \u0432\u043B\u0430\u0441\u043D\u0443 \u043A\u043B\u0456\u0442\u043A\u0443."),
  highlight: "Масштаб починається, коли ти закриваєш ноутбук, а система продовжує генерувати гроші."
}, {
  myth: 2,
  tone: "cream",
  title: "«Масштаб — це гігантські бюджети»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0417\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u043D\u044F \u0431\u044E\u0434\u0436\u0435\u0442\u0443 \u043D\u0430 \u043D\u0435\u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0443 \u0432\u043E\u0440\u043E\u043D\u043A\u0443 \u043F\u0440\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u044C \u0434\u043E ", /*#__PURE__*/React.createElement("strong", null, "\u043A\u0430\u0441\u043E\u0432\u043E\u0433\u043E \u0440\u043E\u0437\u0440\u0438\u0432\u0443"), ". \u041F\u0456\u0434\u043D\u0456\u043C\u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0456\u044E \u0432\u043E\u0440\u043E\u043D\u043A\u0438 \u0445\u043E\u0447\u0430 \u0431 \u043D\u0430 ", /*#__PURE__*/React.createElement("em", null, "1%"), " \u043D\u0430 \u043A\u043E\u0436\u043D\u043E\u043C\u0443 \u0435\u0442\u0430\u043F\u0456 \u2014 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0448 \u0431\u0456\u043B\u044C\u0448\u0435 \u0447\u0438\u0441\u0442\u043E\u0433\u043E \u043F\u0440\u0438\u0431\u0443\u0442\u043A\u0443, \u043D\u0456\u0436 \u0432\u0456\u0434 \u0442\u0443\u043F\u043E\u0433\u043E \u043F\u043E\u0434\u0432\u043E\u0454\u043D\u043D\u044F \u0431\u044E\u0434\u0436\u0435\u0442\u0443.")
}, {
  myth: 3,
  tone: "photo",
  bgImage: "photo-3.jpg",
  title: "«Особистий бренд — це красива картинка»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0415\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u0456 \u0441\u043D\u0456\u0434\u0430\u043D\u043A\u0438 \u0442\u0430 \u043A\u0430\u0432\u0430 \u0432 \u043F\u0440\u043E\u0444\u0456\u043B\u044C \u043D\u0456\u043A\u043E\u043C\u0443 \u043D\u0435 \u0446\u0456\u043A\u0430\u0432\u0456. ", /*#__PURE__*/React.createElement("strong", null, "\u041F\u0440\u0435\u043C\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u0456\u0454\u043D\u0442"), " \u043A\u0443\u043F\u0443\u0454 \u0442\u0432\u043E\u0457 \u043C\u0456\u0437\u043A\u0438, \u0442\u0432\u043E\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 \u0442\u0430 \u0442\u0432\u0456\u0439 \u0441\u043F\u043E\u043A\u0456\u0439. \u0419\u043E\u043C\u0443 \u0431\u0430\u0439\u0434\u0443\u0436\u0435 \u043D\u0430 \u043A\u043E\u043B\u0456\u0440 \u0442\u0432\u043E\u0454\u0457 \u043C\u0430\u0448\u0438\u043D\u0438."),
  highlight: "Замість глянцю покажіть залізобетонну логіку рішень та оцифровані кейси."
}, {
  myth: 4,
  tone: "forest",
  title: "«Маркетинг — це творчість»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041A\u0440\u0435\u0430\u0442\u0438\u0432 \u0431\u0435\u0437 \u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438 \u2014 \u0446\u0435 ", /*#__PURE__*/React.createElement("strong", null, "\u0432\u0438\u0442\u0440\u0430\u0442\u0430 \u0431\u044E\u0434\u0436\u0435\u0442\u0443 \u043D\u0430\u043E\u0441\u043B\u0456\u043F"), ". \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u2014 \u0446\u0435 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430 \u0439 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043E\u0432\u0430\u043D\u0430 \u0456\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430. \u0415\u043C\u043E\u0446\u0456\u0457 \u0442\u0443\u0442 \u043B\u0438\u0448\u0435 \u043E\u0434\u043D\u0430 \u0456\u0437 \u0437\u043C\u0456\u043D\u043D\u0438\u0445 \u0443 \u0444\u043E\u0440\u043C\u0443\u043B\u0456."),
  highlight: "Немає чітких показників вартості ліда та LTV — бізнесом керує випадок, а не ти."
}, {
  myth: 5,
  tone: "cream",
  title: "«Агенція під ключ усе вирішить»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041F\u0456\u0434\u0440\u044F\u0434\u043D\u0438\u043A\u0438 \u043D\u0435 \u0441\u0442\u0432\u043E\u0440\u044E\u044E\u0442\u044C \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044E \u2014 \u0432\u043E\u043D\u0438 \u043B\u0438\u0448\u0435 ", /*#__PURE__*/React.createElement("strong", null, "\u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u044E\u0442\u044C \u0442\u0456 \u043F\u0440\u043E\u0446\u0435\u0441\u0438"), ", \u044F\u043A\u0456 \u0432\u0436\u0435 \u0454 \u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457. \u042F\u043A\u0449\u043E \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0445\u0430\u043E\u0441, \u0430\u0433\u0435\u043D\u0446\u0456\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0454 \u0445\u0430\u043E\u0441 \u0437\u0430 \u0442\u0432\u043E\u0457 \u0436 \u0433\u0440\u043E\u0448\u0456."),
  highlight: "Тобі потрібен не виконавець для тестів, а архітектор, що вибудує внутрішню систему."
}, {
  myth: 6,
  tone: "photo",
  bgImage: "photo-4.jpg",
  title: "«ШІ не замінить людину»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0438\u0439 ", /*#__PURE__*/React.createElement("strong", null, "AI-\u0430\u0433\u0435\u043D\u0442"), " \u043E\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0443\u0454 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0442\u0430 \u043F\u0438\u0448\u0435 \u0442\u0435\u043A\u0441\u0442\u0438 \u0437\u0430 \u0437\u0430\u0434\u0430\u043D\u043E\u044E \u043C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0456\u0454\u044E \u2014 \u0431\u0435\u0437 \u0432\u0438\u0433\u043E\u0440\u0430\u043D\u043D\u044F, \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0445 \u0442\u0430 \u043B\u044E\u0434\u0441\u044C\u043A\u043E\u0433\u043E \u0444\u0430\u043A\u0442\u043E\u0440\u0430."),
  highlight: "ШІ не замінить твою особистість. Він просто масштабує твій мозок."
}, {
  myth: 7,
  tone: "sage",
  title: "«Великі чеки — це маніпуляції та прогріви»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041F\u0440\u0435\u043C\u0456\u0443\u043C-\u0441\u0435\u0433\u043C\u0435\u043D\u0442 \u043A\u0443\u043F\u0443\u0454 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 ", /*#__PURE__*/React.createElement("strong", null, "\u0442\u043E\u0447\u043D\u043E\u0457 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438"), ". \u0414\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0443 \u043E\u0446\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0456 \u0437\u0431\u0438\u0442\u043A\u0438 \u0442\u0430 \u0434\u0456\u0440\u043A\u0438, \u043A\u0443\u0434\u0438 \u043F\u0440\u043E\u0442\u0456\u043A\u0430\u0454 \u043F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0431\u044E\u0434\u0436\u0435\u0442."),
  highlight: "Коли людина бачить реальну суму втрат на цифрах — рішення приймається раціонально."
}, {
  myth: 8,
  tone: "cream",
  title: "«Аналітика — складно й тільки для великих»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0411\u0435\u0437 \u043D\u0430\u0441\u043A\u0440\u0456\u0437\u043D\u043E\u0457 \u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438 \u0437 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u0434\u043D\u044F \u0431\u0456\u0437\u043D\u0435\u0441 \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F \u043D\u0430 ", /*#__PURE__*/React.createElement("strong", null, "\u043D\u0435\u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0443\u0432\u0430\u043D\u0443 \u0441\u0430\u043C\u043E\u0437\u0430\u0439\u043D\u044F\u0442\u0456\u0441\u0442\u044C"), ". \u041A\u043E\u043B\u0438 \u0440\u0443\u0445 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0434\u043E\u043B\u0430\u0440\u0430 \u0432\u0438\u0434\u043D\u043E \u043D\u0430 \u043E\u0434\u043D\u043E\u043C\u0443 \u0447\u0438\u0441\u0442\u043E\u043C\u0443 \u0434\u0430\u0448\u0431\u043E\u0440\u0434\u0456 \u2014 \u0437\u043D\u0438\u043A\u0430\u0454 \u043D\u0435\u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456\u0441\u0442\u044C.")
}, {
  myth: 9,
  tone: "forest",
  title: "«Головне — постійні нові клієнти»",
  body: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0424\u043E\u043A\u0443\u0441 \u043B\u0438\u0448\u0435 \u043D\u0430 \u043D\u043E\u0432\u0438\u0445 \u043B\u0456\u0434\u0430\u0445 \u043F\u0440\u0438 \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u0456 \u0434\u0456\u044E\u0447\u043E\u0457 \u0431\u0430\u0437\u0438 \u0437\u043D\u0438\u0436\u0443\u0454 \u043C\u0430\u0440\u0436\u0438\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u2014 \u043D\u043E\u0432\u0438\u0439 \u0442\u0440\u0430\u0444\u0456\u043A \u0437\u0430\u0432\u0436\u0434\u0438 \u043A\u043E\u0448\u0442\u0443\u0454 ", /*#__PURE__*/React.createElement("strong", null, "\u043D\u0430\u0439\u0434\u043E\u0440\u043E\u0436\u0447\u0435"), ". \u0421\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0438\u0439 \u043A\u0430\u043F\u0456\u0442\u0430\u043B \u0444\u043E\u0440\u043C\u0443\u0454\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 ", /*#__PURE__*/React.createElement("em", null, "LTV"), "."),
  highlight: "Продуктова лінійка має утримувати клієнта роками."
}];
const TOTAL_SLIDES = 11;
const slideRenderers = [(i, t) => /*#__PURE__*/React.createElement(CoverSlide, null), ...MYTHS.map(m => (i, t) => /*#__PURE__*/React.createElement(MythSlide, {
  mythNumber: m.myth,
  index: i,
  total: t,
  title: m.title,
  body: m.body,
  highlight: m.highlight,
  tone: m.tone,
  bgImage: m.bgImage
})), (i, t) => /*#__PURE__*/React.createElement(CTASlide, {
  index: i,
  total: t
})];
Object.assign(window, {
  CoverSlide,
  MythSlide,
  CTASlide,
  SlideFooter,
  Spark,
  MYTHS,
  TOTAL_SLIDES,
  slideRenderers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/carousel/slides.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CounterPill = __ds_scope.CounterPill;

__ds_ns.NumberedPill = __ds_scope.NumberedPill;

__ds_ns.QuoteBox = __ds_scope.QuoteBox;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
