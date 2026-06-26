import * as React from "react";

/** Ordered list item — serif numeral + body text in a rounded pill. */
export interface NumberedPillProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The leading numeral (a "." is appended automatically). */
  number: number | string;
  /** "light" = bone pill, "dark" = forest pill. @default "light" */
  tone?: "light" | "dark";
  children?: React.ReactNode;
}

export function NumberedPill(props: NumberedPillProps): JSX.Element;
