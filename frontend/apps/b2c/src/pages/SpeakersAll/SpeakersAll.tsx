import { SpeakerCard } from '../EventRegister/components/SpeakerCard';
import { AboutSpeaker } from '../AboutSpeaker';
import { useSheetNavigation } from '../../navigation';
import type { SpeakersAllProps } from './SpeakersAll.types';
import styles from './SpeakersAll.module.css';

export function SpeakersAll({ speakers }: SpeakersAllProps) {
  const { push } = useSheetNavigation();

  const handleSpeakerClick = (speaker: SpeakersAllProps['speakers'][number]) => {
    push(
      <AboutSpeaker speaker={speaker} />,
      { title: `${speaker.name} ${speaker.surname}` }
    );
  };

  return (
    <div className={styles.grid}>
      {speakers.map(s => (
        <SpeakerCard key={s.speaker_id} speaker={s} onClick={() => handleSpeakerClick(s)} />
      ))}
    </div>
  );
}
