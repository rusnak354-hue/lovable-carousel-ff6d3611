import * as React from "react";

/** Signature pull-quote — bone surface, sage left rule, serif italic. */
export interface QuoteBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function QuoteBox(props: QuoteBoxProps): JSX.Element;
