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
  onClick?: () => void;
};

export type { SpeakerCardItem, SpeakerCardProps };
