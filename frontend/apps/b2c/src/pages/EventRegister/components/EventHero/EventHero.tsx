import { Icon, Text } from '@sci-event/ui';
import styles from './EventHero.module.css';
import type { EventHeroProps } from './EventHero.types';

const EventHero = ({ name, dateLabel, locationLabel }: EventHeroProps) => (
  <div className={styles.hero}>
    <div className={styles.titleRow}>
      <Text as="h2" size="lg" weight="bold">{name}</Text>
    </div>
    <div className={styles.metaRow}>
      <div className={styles.metaItem}>
        <Icon name="Calendar" size={15} color="color-neutral-400" />
        <Text size="sm" color="color-neutral-600">{dateLabel}</Text>
      </div>
      <div className={styles.metaItem}>
        <Icon name="MapPin" size={15} color="color-neutral-400" />
        <Text size="sm" color="color-neutral-600">{locationLabel}</Text>
      </div>
    </div>
  </div>
);

export { EventHero };
