import cn from "classnames";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const cls = cn(styles.button, styles[variant], styles[size], className);
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
