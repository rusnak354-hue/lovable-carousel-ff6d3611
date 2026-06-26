import React from "react";

/**
 * Input — text field with a quiet uppercase label.
 * Hairline underline-forward editorial style on the milk surface.
 */
export function Input({
  label,
  hint,
  type = "text",
  style = {},
  ...rest
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-body)" }}>
      {label && (
        <span
          style={{
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </span>
      )}
      <input
        type={type}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          color: "var(--ink)",
          background: "var(--bg-raised)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-sm)",
          padding: "12px 14px",
          outline: "none",
          transition: "border-color var(--dur-base) var(--ease-quiet)",
          ...style,
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--ring)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
        {...rest}
      />
      {hint && (
        <span style={{ fontSize: 13, color: "var(--text-muted)", opacity: 0.8 }}>{hint}</span>
      )}
    </label>
  );
}
