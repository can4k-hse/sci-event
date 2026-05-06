import cn from "classnames";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";
import { Icon } from "../Icon";

const iconSize = { sm: 14, md: 16, lg: 20 } as const;

export function Button({ variant = "primary", size = "md", fullWidth, children, iconOnly, iconName, ...props }: ButtonProps) {
  if (iconOnly) {
    return (
      <button
        className={cn(styles.button, styles[variant], styles[size], styles.iconOnly, fullWidth && styles.fullWidth)}
        aria-label={props['aria-label'] ?? iconName}
        {...props}
      >
        <Icon name={iconName} size={iconSize[size ?? 'md']} />
      </button>
    );
  }

  return (
    <button className={cn(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth)} {...props}>
      {children}
    </button>
  );
}
