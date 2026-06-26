import * as React from "react";

/** Small brand label / chip in three treatments. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "chip" = solid sage block, "bracket" = [label], "outline" = hairline pill. @default "chip" */
  variant?: "chip" | "bracket" | "outline";
  /** Color context for bracket/outline. @default "auto" (inherits currentColor) */
  tone?: "auto" | "dark" | "light";
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
