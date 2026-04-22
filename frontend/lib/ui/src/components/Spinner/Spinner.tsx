import cn from "classnames";
import styles from "./Spinner.module.css";
import type { SpinnerProps } from "./Spinner.types";

export type { SpinnerProps, SpinnerSize } from "./Spinner.types";

export function Spinner({ size = "md", className, label = "Загрузка..." }: SpinnerProps) {
  return (
    <span
      className={cn(styles.spinner, styles[size], className)}
      role="status"
      aria-label={label}
    />
  );
}
