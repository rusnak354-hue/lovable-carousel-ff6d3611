import React from "react";

/**
 * NumberedPill — serif italic numeral + body text in a rounded pill.
 * Used for ordered lists / steps on slides. Light (bone) or dark (forest).
 */
export function NumberedPill({ number, children, tone = "light", style = {}, ...rest }) {
  const dark = tone === "dark";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 22,
        padding: "22px 32px",
        background: dark ? "var(--forest-deep)" : "var(--bone)",
        color: dark ? "var(--cream)" : "var(--ink)",
        borderRadius: "var(--radius-plate)",
        boxShadow: "var(--shadow-soft)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 44,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          minWidth: 64,
        }}
      >
        {number}.
      </span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 22,
          lineHeight: 1.35,
          letterSpacing: "0.01em",
        }}
      >
        {children}
      </span>
    </div>
  );
}
