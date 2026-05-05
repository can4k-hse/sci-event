import cn from 'classnames';
import styles from './Toggle.module.css';
import type { ToggleProps } from './Toggle.types';
import { Text } from '../Text';

export function Toggle({ checked, onChange, disabled, label, className }: ToggleProps) {
  const handleClick = () => {
    if (!disabled) onChange(!checked);
  };

  return (
    <label className={cn(styles.root, { [styles.disabled]: disabled }, className)}>
      {label && (
        <Text size="sm" className={styles.label}>{label}</Text>
      )}
      <div
        className={cn(styles.track, { [styles.checked]: checked, [styles.disabled]: disabled })}
        onClick={handleClick}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={e => { if (e.key === ' ' || e.key === 'Enter') handleClick(); }}
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
