import { Text } from '@sci-event/ui';
import styles from './EventHero.module.css';
import type { EventHeroProps } from './EventHero.types';

const EventHero = ({ title }: EventHeroProps) => (
  <div className={styles.hero}>
    <Text as="h1" size="xl" weight="bold">{title}</Text>
  </div>
);

export { EventHero };
