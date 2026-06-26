import * as React from "react";

/** Slide pagination mark — hairline pill showing "current / total". */
export interface CounterPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Current slide number (1-based). */
  index: number;
  /** Total slide count. */
  total: number;
}

export function CounterPill(props: CounterPillProps): JSX.Element;
