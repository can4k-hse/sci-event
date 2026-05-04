import { Avatar, Tag, Text } from '@sci-event/ui';
import cn from 'classnames';
import styles from './SpeakerCard.module.css';
import type { SpeakerCardProps } from './SpeakerCard.types';

const SpeakerCard = ({ speaker, onClick }: SpeakerCardProps) => (
  <div className={cn(styles.card, onClick && styles.clickable)} onClick={onClick} role={onClick ? 'button' : undefined}>
    <Avatar
      src={speaker.src}
      name={`${speaker.name} ${speaker.surname}`}
      size="lg"
      className={styles.avatar}
    />
    <div className={styles.name}>
      <Text size="xs" weight="semibold" color="color-violet-900">{speaker.name}</Text>
      <Text size="xs" weight="semibold" color="color-violet-900">{speaker.surname}</Text>
    </div>
    {speaker.company && (
      <Text size="xs" color="color-violet-700">{speaker.company}</Text>
    )}
    {speaker.tag && (
      <Tag variant="violet">{speaker.tag}</Tag>
    )}
  </div>
);

export { SpeakerCard };
