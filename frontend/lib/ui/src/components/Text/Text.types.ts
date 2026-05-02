import type { HTMLAttributes } from "react";
import type { ColorToken } from "../../tokens/ColorToken";

export type TextAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: TextAs;
  size?: TextSize;
  weight?: TextWeight;
  color?: ColorToken;
  textAlign?: TextAlign;
};
