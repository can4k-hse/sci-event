import type { Event, Place } from '../../mocks/event';

type SpeakerItem = {
  speaker_id: number;
  name: string;
  surname: string;
  src?: string;
  company?: string;
  tag?: string;
};

type EventRegisterProps = {
  event: Event;
  speakers: SpeakerItem[];
  place: Place;
  onRegister: () => void;
  onSpeakersAll?: () => void;
};

export type { SpeakerItem, EventRegisterProps };
