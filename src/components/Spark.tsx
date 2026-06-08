export function Spark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 0 C17 11 21 15 32 16 C21 17 17 21 16 32 C15 21 11 17 0 16 C11 15 15 11 16 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}