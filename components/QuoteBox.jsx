import React from "react";

/**
 * QuoteBox — the signature pull-quote: bone surface, sage left rule,
 * serif italic. Used for the "highlight" line on myth slides.
 */
export function QuoteBox({ children, style = {}, ...rest }) {
  return (
    <div
      style={{
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
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 16,
          bottom: 16,
          width: 3,
          background: "var(--sage)",
          borderRadius: 2,
        }}
      />
      {children}
    </div>
  );
}
