import type { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const cls = cn(styles.button, styles[variant], styles[size], className);
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
