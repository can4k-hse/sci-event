import { useState, useEffect, useRef } from 'react';
import { Button, OtpInput, Text } from '@sci-event/ui';
import styles from './OtpStep.module.css';

type OtpStepProps = {
  phone: string;
  onNext: () => void;
  onExpired: () => void;
  onResend: () => void;
};

const OTP_DURATION = 90;
const MOCK_INVALID = '000000';

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function OtpStep({ phone, onNext, onExpired, onResend }: OtpStepProps) {
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [seconds, setSeconds] = useState(OTP_DURATION);
  const [isExpired, setIsExpired] = useState(false);
  const expiredFired = useRef(false);

  useEffect(() => {
    if (seconds <= 0) {
      if (!expiredFired.current) {
        expiredFired.current = true;
        setIsExpired(true);
        onExpired();
      }
      return;
    }
    const id = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds, onExpired]);

  const handleChange = (value: string) => {
    setCode(value);
    setIsError(false);
    if (value.length === 6) {
      if (value === MOCK_INVALID) {
        setIsError(true);
      } else {
        onNext();
      }
    }
  };

  return (
    <div className={styles.root}>
      <Text as="h1" size="xxl" weight="bold">Введите код из SMS</Text>
      <Text color="color-neutral-500">Мы отправили код подтверждения на номер {phone}</Text>
      <OtpInput value={code} onChange={handleChange} error={isError} disabled={isExpired} />
      <Text size="sm" color={isExpired ? 'color-error-500' : 'color-neutral-500'}>
        Код действует {formatTime(seconds)}
      </Text>
      {isError && (
        <Text color="color-error-500" size="sm">Неверный код. Попробуйте ещё раз</Text>
      )}
      <Button variant="ghost" disabled={!isExpired} onClick={onResend}>
        Отправить ещё раз
      </Button>
    </div>
  );
}
