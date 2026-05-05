import { useState } from 'react';
import { Button, Icon, PhoneInput, Picture, Text } from '@sci-event/ui';
import styles from './PhoneStep.module.css';

type PhoneStepProps = {
  onNext: (phone: string) => void;
};

function isPhoneValid(value: string): boolean {
  return value.replace(/\D/g, '').length >= 10;
}

export function PhoneStep({ onNext }: PhoneStepProps) {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('RU');

  const handleNext = () => {
    if (isPhoneValid(phone)) onNext(phone);
  };

  return (
    <div className={styles.root}>
      <Picture name="320_sms" size={320} className={styles.picture} />
      <Text as="h1" size="xxl" weight="bold">
        Добро пожаловать в{' '}
        <Text as="span" color="color-primary-600">SciEvent</Text>!
      </Text>
      <Text color="color-neutral-500">
        Для начала работы введите номер телефона. Мы отправим код подтверждения.
      </Text>
      <PhoneInput
        value={phone}
        onChange={setPhone}
        countryCode={countryCode}
        onCountryChange={setCountryCode}
      />
      <Button variant="primary" disabled={!isPhoneValid(phone)} onClick={handleNext}>
        Продолжить
      </Button>
      <div className={styles.disclaimer}>
        <Icon name="Lock" size={14} color="color-neutral-400" />
        <Text size="xs" color="color-neutral-500">
          Мы не передаём ваш номер третьим лицам и используем его только для авторизации
        </Text>
      </div>
    </div>
  );
}
