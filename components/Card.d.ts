import * as React from "react";

/** Surface container in three brand treatments. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "soft" = milk + 18px radius + long shadow; "sharp" = bone + 4px; "forest" = dark panel. @default "soft" */
  variant?: "soft" | "sharp" | "forest";
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
