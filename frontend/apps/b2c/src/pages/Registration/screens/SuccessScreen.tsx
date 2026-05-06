import { Button, Picture, Text } from '@sci-event/ui';
import styles from './SuccessScreen.module.css';

type SuccessScreenProps = {
  onGoToEvents: () => void;
  onGoToProfile: () => void;
  onClose: () => void;
};

export function SuccessScreen({ onGoToEvents, onGoToProfile }: SuccessScreenProps) {
  return (
    <div className={styles.root}>
      <Picture name="320_check" size={200} />
      <Text as="h1" size="xxl" weight="bold">Регистрация успешна!</Text>
      <Text color="color-neutral-500">
        Добро пожаловать в SciEvent. Теперь вы можете участвовать в мероприятиях и общаться с единомышленниками.
      </Text>
      <Button variant="primary" size="lg" onClick={onGoToEvents}>Перейти к мероприятиям</Button>
      <Button variant="ghost" size="lg" onClick={onGoToProfile}>Перейти в профиль</Button>
    </div>
  );
}
