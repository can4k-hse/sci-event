import { useState } from 'react';
import { Button, Tag, Text, Toggle } from '@sci-event/ui';
import styles from './PreferencesStep.module.css';

export type PreferencesData = {
  topics: string[];
  notifications: boolean;
};

type PreferencesStepProps = {
  onNext: (data: PreferencesData) => void;
};

const TOPICS = [
  'Искусственный интеллект', 'Анализ данных', 'Machine Learning',
  'Разработка', 'Продукт', 'Стартапы', 'Наука', 'Образование',
  'Дизайн', 'Маркетинг', 'Управление', 'Бизнес', 'Другое',
];

export function PreferencesStep({ onNext }: PreferencesStepProps) {
  const [topics, setTopics] = useState<string[]>([]);
  const [notifications, setNotifications] = useState(true);

  const toggleTopic = (topic: string) => {
    setTopics(prev =>
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const handleNext = () => {
    onNext({ topics, notifications });
  };

  return (
    <div className={styles.root}>
      <Text as="h1" size="xxl" weight="bold">Что вам интересно?</Text>
      <Text color="color-neutral-500">
        Выберите темы, которые вам ближе всего. Это поможет нам рекомендовать интересные мероприятия и доклады.
      </Text>
      <div className={styles.tags}>
        {TOPICS.map(topic => (
          <Tag
            key={topic}
            variant={topics.includes(topic) ? 'violet' : 'neutral'}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
          </Tag>
        ))}
      </div>
      <div className={styles.toggles}>
        <Toggle
          checked={notifications}
          onChange={setNotifications}
          label="Получать уведомления о мероприятиях и новостях"
        />
      </div>
      <Button variant="primary" size="lg" onClick={handleNext}>
        Завершить регистрацию
      </Button>
    </div>
  );
}
