import type { Talk } from '../../mocks/speakers';

export type AboutSpeakerItem = {
  speaker_id: number;
  name: string;
  surname: string;
  src?: string;
  bio?: string;
  company?: string;
  position?: string;
  tag?: string;
  expertise?: string[];
  talks?: Talk[];
};

export type AboutSpeakerProps = {
  speaker: AboutSpeakerItem;
};
