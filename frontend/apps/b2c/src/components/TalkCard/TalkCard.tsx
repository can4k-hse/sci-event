import { Icon, Text } from '@sci-event/ui';
import styles from './TalkCard.module.css';
import type { TalkCardProps } from './TalkCard.types';

export function TalkCard({ title, date, timeStart, timeEnd, venue }: TalkCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.dateBadge}>
        <Text as="span" size="xs" weight="semibold" color="color-violet-700">{date}</Text>
        <Text as="span" size="xs" color="color-violet-500">{timeStart}</Text>
        <Text as="span" size="xs" color="color-violet-500">{timeEnd}</Text>
      </div>
      <div className={styles.body}>
        <Text size="sm" weight="semibold" color="color-neutral-900">{title}</Text>
        <div className={styles.meta}>
          <Icon name="MapPin" size={12} color="color-neutral-500" />
          <Text as="span" size="xs" color="color-neutral-500">{venue}</Text>
        </div>
      </div>
      <div className={styles.arrow}>
        <Icon name="ChevronRight" size={18} color="color-violet-400" />
      </div>
    </div>
  );
}
