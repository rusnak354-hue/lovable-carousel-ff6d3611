import React from "react";

/**
 * CounterPill — the slide pagination mark: hairline pill with
 * "current / total" in spaced body type. Inherits color from context.
 */
export function CounterPill({ index, total, style = {}, ...rest }) {
  const fmt = (n) => String(n).padStart(2, "0");
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      <span style={{ opacity: 0.55 }}>{fmt(index)}</span>
      <span
        style={{
          display: "inline-block",
          width: 24,
          height: 1,
          background: "currentColor",
          opacity: 0.45,
          margin: "0 4px 4px",
        }}
      />
      <span>{fmt(total)}</span>
    </span>
  );
}
