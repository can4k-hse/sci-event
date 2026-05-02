import type { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Text.module.css";
import type { TextProps } from "./Text.types";
import { colorToVar } from "../../tokens/ColorToken";

export type { TextProps, TextAs, TextSize, TextWeight } from "./Text.types";

export function Text({
  as: Tag = "p",
  size = "md",
  weight = "regular",
  color,
  className,
  style,
  children,
  ...props
}: TextProps) {
  const cls = cn(styles.text, styles[size], styles[weight], className);
  const colorStyle = color ? { color: colorToVar(color) } : undefined;
  const mergedStyle = colorStyle || style ? { ...colorStyle, ...style } : undefined;
  return (
    <Tag className={cls} style={mergedStyle} {...(props as HTMLAttributes<HTMLElement>)}>
      {children}
    </Tag>
  );
}
