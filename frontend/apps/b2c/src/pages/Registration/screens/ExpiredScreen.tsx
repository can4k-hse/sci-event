import { Button, Icon, Text } from '@sci-event/ui';
import styles from './ExpiredScreen.module.css';

type ExpiredScreenProps = {
  onResend: () => void;
  onChangePhone: () => void;
};

export function ExpiredScreen({ onResend, onChangePhone }: ExpiredScreenProps) {
  return (
    <div className={styles.root}>
      <Icon name="Clock" size={64} color="color-violet-500" />
      <Text as="h1" size="xxl" weight="bold">Время истекло</Text>
      <Text color="color-neutral-500">
        Запросите новый код подтверждения, чтобы продолжить регистрацию.
      </Text>
      <Button variant="primary" onClick={onResend}>Отправить новый код</Button>
      <Button variant="ghost" onClick={onChangePhone}>Изменить номер телефона</Button>
    </div>
  );
}
