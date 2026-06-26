import React from "react";

/**
 * Badge — small label. Three brand treatments:
 *  - "chip"    → solid sage block, uppercase, wide tracking (the "sage-chip")
 *  - "bracket" → [ bracketed ] body label
 *  - "outline" → hairline pill (the "tag-pill")
 */
export function Badge({
  children,
  variant = "chip",
  tone = "auto",
  style = {},
  ...rest
}) {
  const toneColor =
    tone === "dark" ? "var(--forest)" : tone === "light" ? "var(--cream)" : "currentColor";

  if (variant === "chip") {
    return (
      <span
        style={{
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
          ...style,
        }}
        {...rest}
      >
        {children}
      </span>
    );
  }

  if (variant === "bracket") {
    return (
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: toneColor,
          opacity: 0.9,
          ...style,
        }}
        {...rest}
      >
        [{children}]
      </span>
    );
  }

  // outline pill
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
