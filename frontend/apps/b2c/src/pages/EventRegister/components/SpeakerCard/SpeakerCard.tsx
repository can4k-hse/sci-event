import { Avatar, Text } from '@sci-event/ui';
import styles from './SpeakerCard.module.css';
import type { SpeakerCardProps } from './SpeakerCard.types';

const SpeakerCard = ({ speaker }: SpeakerCardProps) => (
  <div className={styles.card}>
    <Avatar
      src={speaker.src}
      name={`${speaker.name} ${speaker.surname}`}
      size="lg"
      className={styles.avatar}
    />
    <div className={styles.name}>
      <Text size="xs" weight="semibold" className={styles.speakerName}>{speaker.name}</Text>
      <Text size="xs" weight="semibold" className={styles.speakerName}>{speaker.surname}</Text>
    </div>
    {speaker.company && (
      <Text size="xs" className={styles.company}>{speaker.company}</Text>
    )}
    {speaker.tag && (
      <span className={styles.tag}>
        <Text as="span" size="xs" className={styles.tagText}>{speaker.tag}</Text>
      </span>
    )}
  </div>
);

export { SpeakerCard };
