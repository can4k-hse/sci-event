import { useState, useRef, useEffect, type ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './PhoneInput.module.css';
import type { Country, PhoneInputProps } from './PhoneInput.types';
import { Text } from '../Text';

const COUNTRIES: Country[] = [
  { code: 'RU', dialCode: '+7', flag: '🇷🇺', mask: '(###) ###-##-##' },
  { code: 'DE', dialCode: '+49', flag: '🇩🇪', mask: '### ########' },
  { code: 'FR', dialCode: '+33', flag: '🇫🇷', mask: '# ## ## ## ##' },
];

function applyMask(raw: string, mask: string): string {
  const digits = raw.replace(/\D/g, '');
  let result = '';
  let di = 0;
  for (const ch of mask) {
    if (di >= digits.length) break;
    if (ch === '#') {
      result += digits[di++];
    } else {
      result += ch;
    }
  }
  return result;
}

function countMaskDigits(mask: string): number {
  return mask.split('').filter(c => c === '#').length;
}

export function PhoneInput({ value, onChange, countryCode = 'RU', onCountryChange, error, disabled, className }: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const country = COUNTRIES.find(c => c.code === countryCode) ?? COUNTRIES[0];

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    onChange(applyMask(raw, country.mask));
  };

  const handleSelectCountry = (code: string) => {
    setOpen(false);
    onCountryChange?.(code);
    onChange('');
  };

  const maxLen = countMaskDigits(country.mask);
  const isComplete = value.replace(/\D/g, '').length === maxLen;

  return (
    <div className={cn(styles.wrapper, className)} ref={rootRef}>
      <div className={cn(styles.root, {
        [styles.focused]: focused,
        [styles.error]: !!error,
        [styles.disabled]: disabled,
      })}>
        <div className={styles.positionAnchor}>
          <button
            type="button"
            className={styles.countryBtn}
            onClick={() => !disabled && setOpen(v => !v)}
            disabled={disabled}
            aria-label="Выбрать страну"
            aria-expanded={open}
          >
            <span>{country.flag}</span>
            <span>{country.dialCode}</span>
          </button>
          {open && (
            <div className={styles.dropdown}>
              {COUNTRIES.map(c => (
                <div
                  key={c.code}
                  className={cn(styles.dropdownItem, { [styles.active]: c.code === countryCode })}
                  onClick={() => handleSelectCountry(c.code)}
                >
                  <span>{c.flag}</span>
                  <span>{c.dialCode}</span>
                  <span>{c.code}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.divider} />
        <input
          type="tel"
          className={styles.input}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          placeholder={country.mask.replace(/#/g, '0')}
          aria-invalid={!!error}
          aria-label="Номер телефона"
          data-complete={isComplete}
        />
      </div>
      {error && <Text size="xs" className={styles.errorText}>{error}</Text>}
    </div>
  );
}
