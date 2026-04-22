import type { InputHTMLAttributes } from "react";

export type InputSize = "sm" | "md" | "lg";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: InputSize;
  label?: string;
  error?: string;
  hint?: string;
};
