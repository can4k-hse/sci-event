import { Text } from '@sci-event/ui';
import styles from './EventInfoSection.module.css';
import type { EventInfoSectionProps } from './EventInfoSection.types';

const EventInfoSection = ({ label, children }: EventInfoSectionProps) => (
  <section className={styles.section}>
    <Text weight="bold" size="sm">{label}</Text>
    <div className={styles.content}>{children}</div>
  </section>
);

export { EventInfoSection };
