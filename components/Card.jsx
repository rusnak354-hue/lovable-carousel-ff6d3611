import React from "react";

/**
 * Card — surface container. Two brand treatments:
 *  - "soft"  → milk surface, 18px radius, hairline border, long soft shadow (calendar-card)
 *  - "sharp" → bone surface, 4px radius (editorial)
 */
export function Card({
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
      boxShadow: "var(--shadow-card)",
    },
    sharp: {
      background: "var(--bone)",
      color: "var(--ink)",
      borderRadius: "var(--radius-sm)",
      border: "1px solid transparent",
      padding: "28px 32px",
      boxShadow: "var(--shadow-soft)",
    },
    forest: {
      background: "var(--forest-deep)",
      color: "var(--cream)",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--hairline-dark)",
      padding: "28px 32px",
      boxShadow: "var(--shadow-card)",
    },
  };

  return (
    <div style={{ ...variants[variant], ...style }} {...rest}>
      {children}
    </div>
  );
}
