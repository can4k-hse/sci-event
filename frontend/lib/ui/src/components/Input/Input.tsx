import { useId } from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export type { InputProps, InputSize } from "./Input.types";

export function Input({ size = "md", label, error, hint, className, id, ...props }: InputProps) {
  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={resolvedId}>
          {label}
        </label>
      )}
      <input
        id={resolvedId}
        className={cn(styles.input, styles[size], error && styles.hasError, className)}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
