import { Button, Picture, Text } from '@sci-event/ui';
import styles from './SuccessScreen.module.css';

type SuccessScreenProps = {
  onGoToEvents: () => void;
  onGoToProfile: () => void;
  onClose: () => void;
};

export function SuccessScreen({ onGoToEvents, onGoToProfile, onClose }: SuccessScreenProps) {
  return (
    <div className={styles.root}>
      <Button iconOnly variant="ghost" iconName="X" onClick={onClose} className={styles.close} />
      <Picture name="320_check" size={320} />
      <Text as="h1" size="xxl" weight="bold">Регистрация успешна!</Text>
      <Text color="color-neutral-500">
        Добро пожаловать в SciEvent. Теперь вы можете участвовать в мероприятиях и общаться с единомышленниками.
      </Text>
      <Button variant="primary" onClick={onGoToEvents}>Перейти к мероприятиям</Button>
      <Button variant="ghost" onClick={onGoToProfile}>Перейти в профиль</Button>
    </div>
  );
}
