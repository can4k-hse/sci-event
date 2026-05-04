import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Button, Icon, Text } from '@sci-event/ui';
import { EventHero } from './components/EventHero';
import { SpeakerCard } from './components/SpeakerCard';
import { AboutSpeaker } from '../AboutSpeaker';
import { useSheetNavigation } from '../../navigation';
import styles from './EventRegister.module.css';
import type { EventRegisterProps, SpeakerItem } from './EventRegister.types';

const TRUNCATE_LEN = 180;

const formatDateRange = (start: number, end?: number): string => {
  const s = dayjs.unix(start).locale('ru');
  if (!end) return s.format('D MMMM YYYY');
  const e = dayjs.unix(end).locale('ru');
  if (s.month() === e.month() && s.year() === e.year()) {
    return `${s.date()}–${e.date()} ${s.format('MMMM YYYY')}`;
  }
  return `${s.format('D MMMM')} – ${e.format('D MMMM YYYY')}`;
};

const EventRegister = ({ event, speakers, place, onRegister, onSpeakersAll }: EventRegisterProps) => {
  const [expanded, setExpanded] = useState(false);
  const { push } = useSheetNavigation();

  const needsTruncation = event.description.length > TRUNCATE_LEN;
  const descText = needsTruncation && !expanded
    ? event.description.slice(0, TRUNCATE_LEN) + '…'
    : event.description;

  const dateLabel = formatDateRange(event.start_time, event.end_time);

  const handleSpeakerClick = (speaker: SpeakerItem) => {
    push(
      <AboutSpeaker speaker={speaker} />,
      { title: `${speaker.name} ${speaker.surname}` }
    );
  };

  return (
    <div className={styles.root}>
      <EventHero name={event.name} dateLabel={dateLabel} locationLabel={place.name} />

      <hr className={styles.divider} />

      <section className={styles.section}>
        <Text weight="bold">О мероприятии</Text>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <Text size="sm" color="color-neutral-600">{descText}</Text>
            {needsTruncation && (
              <button className={styles.expandBtn} onClick={() => setExpanded(e => !e)}>
                <Text as="span" size="sm" color="color-violet-500">
                  {expanded ? 'Скрыть' : 'Читать подробнее'}
                </Text>
                <Icon
                  name={expanded ? 'ChevronUp' : 'ChevronDown'}
                  size={14}
                  color="color-violet-500"
                />
              </button>
            )}
          </div>
          <div className={styles.videoThumb}>
            <div className={styles.playBtn}>
              <Icon name="Play" size={22} color="color-white" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <Text weight="bold">Спикеры</Text>
          {onSpeakersAll && (
            <button className={styles.linkBtn} onClick={onSpeakersAll}>
              <Text as="span" size="sm" color="color-violet-500">Смотреть всех</Text>
            </button>
          )}
        </div>
        <div className={styles.speakersGrid}>
          {speakers.map(s => (
            <SpeakerCard key={s.speaker_id} speaker={s} onClick={() => handleSpeakerClick(s)} />
          ))}
        </div>
      </section>

      <div className={styles.venue}>
        <div className={styles.venueLeft}>
          <Text weight="bold">Место проведения</Text>
          <div className={styles.venueInfo}>
            <Icon name="MapPin" size={18} color="color-neutral-900" />
            <div className={styles.venueText}>
              <Text size="xs" weight="medium">{place.name}</Text>
              <Text size="xs" color="color-neutral-600">{place.adress}</Text>
            </div>
          </div>
        </div>
        <div className={styles.mapThumb} />
      </div>

      <div className={styles.cta}>
        <Button variant="primary" size="lg" className={styles.registerBtn} onClick={onRegister}>
          <Icon name="CreditCard" size={18} color="color-white" />
          Буду участвовать
        </Button>
        <div className={styles.ctaHint}>
          <Icon name="Star" size={14} color="color-violet-500" />
          <Text as="span" size="sm" color="color-neutral-600">Это займёт меньше минуты</Text>
        </div>
      </div>
    </div>
  );
};

export { EventRegister };
