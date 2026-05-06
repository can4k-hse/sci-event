import { type ChangeEvent } from 'react';
import styles from './PhoneInput.module.css';
import type { PhoneInputProps } from './PhoneInput.types';
import { Text } from '../Text';

const MASK = '(###) ###-##-##';

function applyMask(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  let result = '';
  let di = 0;
  for (const ch of MASK) {
    if (di >= digits.length) break;
    result += ch === '#' ? digits[di++] : ch;
  }
  return result;
}

const MAX_DIGITS = MASK.split('').filter(c => c === '#').length;
const PLACEHOLDER = MASK.replace(/#/g, '0');

export function PhoneInput({ value, onChange, error, disabled }: PhoneInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(applyMask(e.target.value.replace(/\D/g, '')));
  };

  const isComplete = value.replace(/\D/g, '').length === MAX_DIGITS;

  return (
    <div className={styles.wrapper}>
      <div className={styles.root}>
        <div className={styles.prefix}>
          <span>🇷🇺</span>
          <span>+7</span>
        </div>
        <div className={styles.divider} />
        <input
          type="tel"
          className={styles.input}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder={PLACEHOLDER}
          aria-invalid={!!error}
          aria-label="Номер телефона"
          data-complete={isComplete}
        />
      </div>
      {error && <Text size="xs" color="color-error-600">{error}</Text>}
    </div>
  );
}
