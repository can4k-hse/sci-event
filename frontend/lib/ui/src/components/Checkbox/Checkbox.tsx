import { useId } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.css";
import type { CheckboxProps } from "./Checkbox.types";

export type { CheckboxProps } from "./Checkbox.types";

export function Checkbox({ label, error, className, id, disabled, ...props }: CheckboxProps) {
  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  return (
    <div className={cn(styles.wrapper, className)}>
      <label className={cn(styles.label, disabled && styles.disabled)} htmlFor={resolvedId}>
        <span className={styles.control}>
          <input
            type="checkbox"
            id={resolvedId}
            className={styles.input}
            disabled={disabled}
            {...props}
          />
          <span className={styles.box} aria-hidden="true" />
        </span>
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
