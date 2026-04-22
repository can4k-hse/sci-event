import type { ReactNode } from "react";

export type ToastVariant = "info" | "success" | "warning" | "error";

export type ToastProps = {
  variant?: ToastVariant;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
};
