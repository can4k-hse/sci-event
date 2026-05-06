import { useState } from 'react';
import { Button, Input, Tag, Text } from '@sci-event/ui';
import styles from './ProfileStep.module.css';

export type ProfileData = {
  fullName: string;
  email: string;
  organization: string;
  position: string;
  interests: string[];
};

type ProfileStepProps = {
  onNext: (data: ProfileData) => void;
};

const INTERESTS = ['AI', 'Data', 'ML', 'Product', 'Dev', 'Design', 'Наука', 'Бизнес'];

export function ProfileStep({ onNext }: ProfileStepProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [position, setPosition] = useState('');
  const [interests, setInterests] = useState<string[]>([]);

  const isValid = fullName.trim().length > 0 && email.trim().length > 0;

  const toggleInterest = (tag: string) => {
    setInterests(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleNext = () => {
    if (isValid) onNext({ fullName, email, organization, position, interests });
  };

  return (
    <div className={styles.root}>
      <Text as="h1" size="xxl" weight="bold">Расскажите о себе</Text>
      <Text color="color-neutral-500">
        Эта информация поможет персонализировать ваш опыт на мероприятиях.
      </Text>
      <Input label="Имя и фамилия" value={fullName} onChange={e => setFullName(e.target.value)} />
      <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input label="Организация" hint="необязательно" value={organization} onChange={e => setOrganization(e.target.value)} />
      <Input label="Должность" hint="необязательно" value={position} onChange={e => setPosition(e.target.value)} />
      <Text weight="medium">Ваши интересы</Text>
      <div className={styles.tags}>
        {INTERESTS.map(tag => (
          <Tag
            key={tag}
            variant={interests.includes(tag) ? 'violet' : 'neutral'}
            onClick={() => toggleInterest(tag)}
          >
            {tag}
          </Tag>
        ))}
      </div>
      <Button variant="primary" size="lg" disabled={!isValid} onClick={handleNext}>
        Продолжить
      </Button>
    </div>
  );
}
