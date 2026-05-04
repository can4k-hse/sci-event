import { SpeakerCard } from '../EventRegister/components/SpeakerCard';
import type { SpeakersAllProps } from './SpeakersAll.types';
import styles from './SpeakersAll.module.css';

export function SpeakersAll({ speakers }: SpeakersAllProps) {
  return (
    <div className={styles.grid}>
      {speakers.map(s => (
        <SpeakerCard key={s.speaker_id} speaker={s} />
      ))}
    </div>
  );
}
