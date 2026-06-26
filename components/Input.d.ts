import * as React from "react";

/** Text input with a quiet uppercase label and optional hint. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase label rendered above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
}

export function Input(props: InputProps): JSX.Element;
