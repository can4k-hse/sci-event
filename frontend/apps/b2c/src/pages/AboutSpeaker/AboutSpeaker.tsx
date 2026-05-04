import { Avatar, Tag, Text } from '@sci-event/ui';
import { TalkCard } from '../../components/TalkCard';
import styles from './AboutSpeaker.module.css';
import type { AboutSpeakerProps } from './AboutSpeaker.types';

export function AboutSpeaker({ speaker }: AboutSpeakerProps) {
  const hasTalks = speaker.talks && speaker.talks.length > 0;
  const hasExpertise = speaker.expertise && speaker.expertise.length > 0;

  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <Avatar
          src={speaker.src}
          name={`${speaker.name} ${speaker.surname}`}
          size="lg"
        />
        <div className={styles.heroInfo}>
          <div className={styles.heroName}>
            <Text size="lg" weight="bold" color="color-neutral-900">
              {speaker.name} {speaker.surname}
            </Text>
            {(speaker.position || speaker.company) && (
              <Text size="sm" color="color-neutral-500">
                {[speaker.position, speaker.company].filter(Boolean).join(', ')}
              </Text>
            )}
          </div>
          {speaker.tag && (
            <div className={styles.heroMeta}>
              <Tag variant="violet">{speaker.tag}</Tag>
            </div>
          )}
        </div>
      </div>

      {speaker.bio && (
        <Text size="sm" color="color-neutral-600">{speaker.bio}</Text>
      )}

      {hasTalks && (
        <div className={styles.section}>
          <Text weight="bold">Доклады на конференции</Text>
          <div className={styles.talks}>
            {speaker.talks!.map(talk => (
              <TalkCard
                key={talk.talk_id}
                title={talk.title}
                date={talk.date}
                timeStart={talk.time_start}
                timeEnd={talk.time_end}
                venue={talk.venue}
              />
            ))}
          </div>
        </div>
      )}

      {hasExpertise && (
        <div className={styles.section}>
          <Text weight="bold">Темы экспертизы</Text>
          <div className={styles.expertiseTags}>
            {speaker.expertise!.map(topic => (
              <Tag key={topic} variant="neutral">{topic}</Tag>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
