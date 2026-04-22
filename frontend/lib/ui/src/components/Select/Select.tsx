import { useId } from "react";
import cn from "classnames";
import styles from "./Select.module.css";
import type { SelectProps } from "./Select.types";

export type { SelectProps, SelectSize, SelectOption } from "./Select.types";

export function Select({
  size = "md",
  label,
  error,
  options,
  placeholder,
  className,
  id,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={resolvedId}>
          {label}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          id={resolvedId}
          className={cn(styles.select, styles[size], error && styles.hasError, className)}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className={styles.arrow} aria-hidden="true" />
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
