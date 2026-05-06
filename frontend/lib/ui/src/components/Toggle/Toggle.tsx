import cn from 'classnames';
import styles from './Toggle.module.css';
import type { ToggleProps } from './Toggle.types';
import { Text } from '../Text';

export function Toggle({ checked, onChange, disabled, label, className }: ToggleProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!disabled) onChange(!checked);
  };

  return (
    <label
      className={cn(styles.root, { [styles.disabled]: disabled }, className)}
      onClick={handleClick}
    >
      {label && (
        <span className={styles.label}><Text size="sm" color="color-neutral-900">{label}</Text></span>
      )}
      <div
        className={cn(styles.track, { [styles.checked]: checked, [styles.disabled]: disabled })}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
      >
        <div className={styles.thumb} />
      </div>
      <input
        type="checkbox"
        className={styles.nativeInput}
        checked={checked}
        disabled={disabled}
        onChange={e => onChange(e.target.checked)}
        aria-hidden
        tabIndex={-1}
      />
    </label>
  );
}
