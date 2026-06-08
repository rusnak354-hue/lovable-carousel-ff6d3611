export function SlideChrome({
  index,
  total,
  hide = false,
}: {
  index: number;
  total: number;
  hide?: boolean;
}) {
  if (hide) return null;
  const fmt = (n: number) => String(n).padStart(2, "0");
  return (
    <div
      className="slide-chrome"
      style={{
        position: "absolute",
        right: 64,
        bottom: 56,
        left: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "currentColor",
      }}
    >
      <span className="brand-mark">k · rusnak — quiet luxury</span>
      <span className="counter-pill">
        <span style={{ opacity: 0.55 }}>{fmt(index)}</span>
        <span className="slash-divider" style={{ width: 24, margin: "0 4px 4px" }} />
        <span>{fmt(total)}</span>
      </span>
    </div>
  );
}

export function SlideTag({
  children,
  className = "",
  variant = "bracket",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "bracket" | "chip";
}) {
  if (variant === "chip") {
    return <span className={`sage-chip ${className}`}>{children}</span>;
  }
  return <span className={`tag-bracket ${className}`}>[{children}]</span>;
}