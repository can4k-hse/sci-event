import type { Event, Place } from '../../mocks/event';

type SpeakerItem = {
  speaker_id: number;
  name: string;
  surname: string;
  src?: string;
};

type EventRegisterProps = {
  event: Event;
  speakers: SpeakerItem[];
  place: Place;
  onRegister: () => void;
  onClose: () => void;
};

export type { SpeakerItem, EventRegisterProps };
