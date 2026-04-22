import { useId } from "react";
import cn from "classnames";
import styles from "./Radio.module.css";
import type { RadioProps } from "./Radio.types";

export type { RadioProps } from "./Radio.types";

export function Radio({ label, className, id, disabled, ...props }: RadioProps) {
  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  return (
    <label className={cn(styles.wrapper, disabled && styles.disabled, className)} htmlFor={resolvedId}>
      <span className={styles.control}>
        <input
          type="radio"
          id={resolvedId}
          className={styles.input}
          disabled={disabled}
          {...props}
        />
        <span className={styles.dot} aria-hidden="true" />
      </span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}
