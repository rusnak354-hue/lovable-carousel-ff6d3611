import React from "react";

/**
 * Button — Ksenia Rusnak primary action.
 * Quiet-luxury: forest fill, generous tracking, sharp 4px corners (or pill).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 18px", fontSize: 13, letterSpacing: "0.14em" },
    md: { padding: "12px 26px", fontSize: 14, letterSpacing: "0.16em" },
    lg: { padding: "16px 34px", fontSize: 16, letterSpacing: "0.18em" },
  };

  const variants = {
    primary: {
      background: "var(--forest)",
      color: "var(--cream)",
      border: "1px solid var(--forest)",
    },
    secondary: {
      background: "var(--sage-mid)",
      color: "var(--cream)",
      border: "1px solid var(--sage-mid)",
    },
    outline: {
      background: "transparent",
      color: "var(--forest)",
      border: "1px solid var(--border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--forest)",
      border: "1px solid transparent",
    },
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
    ...style,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={base}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "translateY(1px)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.opacity = disabled ? 0.45 : 1; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.opacity = 0.86; }}
      {...rest}
    >
      {children}
    </button>
  );
}
