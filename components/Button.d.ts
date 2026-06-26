import * as React from "react";

/**
 * The Ksenia Rusnak primary button — forest fill, uppercase, wide tracking.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. @default "primary" */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Size preset. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render with fully-rounded pill corners instead of the default 4px. @default false */
  pill?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
