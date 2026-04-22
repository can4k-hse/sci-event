import cn from "classnames";
import styles from "./Toast.module.css";
import type { ToastProps } from "./Toast.types";

export type { ToastProps, ToastVariant } from "./Toast.types";

export function Toast({ variant = "info", title, children, onClose, className }: ToastProps) {
  return (
    <div className={cn(styles.toast, styles[variant], className)} role="alert">
      <div className={styles.content}>
        {title && <span className={styles.title}>{title}</span>}
        <span className={styles.message}>{children}</span>
      </div>
      {onClose && (
        <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
          ✕
        </button>
      )}
    </div>
  );
}
