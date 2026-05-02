type SpeakerCardItem = {
  speaker_id: number;
  name: string;
  surname: string;
  src?: string;
  company?: string;
  tag?: string;
};

type SpeakerCardProps = {
  speaker: SpeakerCardItem;
};

export type { SpeakerCardItem, SpeakerCardProps };
