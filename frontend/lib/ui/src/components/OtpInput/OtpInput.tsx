import { useRef, type ClipboardEvent } from 'react';
import cn from 'classnames';
import styles from './OtpInput.module.css';
import type { OtpInputProps } from './OtpInput.types';

export function OtpInput({ length = 6, value, onChange, error, disabled, className }: OtpInputProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const digits = Array.from({ length }, (_, i) => value[i] ?? '');

  const focusAt = (index: number) => {
    inputsRef.current[index]?.focus();
  };

  const handleChange = (index: number, raw: string) => {
    const digit = raw.replace(/\D/g, '').slice(-1);
    if (!digit) return;
    const next = digits.map((d, i) => (i === index ? digit : d)).join('');
    onChange(next);
    if (index < length - 1) focusAt(index + 1);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (!pasted) return;
    const next = Array.from({ length }, (_, i) => pasted[i] ?? '').join('');
    onChange(next);
    const lastFilled = Math.min(pasted.length, length - 1);
    focusAt(lastFilled);
  };

  return (
    <div className={cn(styles.root, className)}>
      {digits.map((digit, i) => (
        <input
          key={i}
          ref={el => { inputsRef.current[i] = el; }}
          className={cn(styles.cell, { [styles.error]: error })}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          disabled={disabled}
          onChange={e => handleChange(i, e.target.value)}
          onPaste={handlePaste}
          aria-label={`Цифра ${i + 1}`}
        />
      ))}
    </div>
  );
}
