import { Spark } from "./Spark";

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
        right: 56,
        bottom: 56,
        display: "flex",
        alignItems: "center",
        gap: 18,
        color: "currentColor",
      }}
    >
      <span className="counter-pill">
        {fmt(index)}/{fmt(total)}
      </span>
      <Spark size={26} />
    </div>
  );
}

export function SlideTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`tag-bracket ${className}`}>[{children}]</span>;
}