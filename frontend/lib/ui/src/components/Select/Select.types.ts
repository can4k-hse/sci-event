import type { SelectHTMLAttributes } from "react";

export type SelectSize = "sm" | "md" | "lg";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
  size?: SelectSize;
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
};
