import type { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Text.module.css";
import type { TextProps } from "./Text.types";

export type { TextProps, TextAs, TextSize, TextWeight, TextColor } from "./Text.types";

export function Text({
  as: Tag = "p",
  size = "md",
  weight = "regular",
  color = "default",
  className,
  children,
  ...props
}: TextProps) {
  const cls = cn(styles.text, styles[size], styles[weight], styles[color], className);
  return (
    <Tag className={cls} {...(props as HTMLAttributes<HTMLElement>)}>
      {children}
    </Tag>
  );
}
