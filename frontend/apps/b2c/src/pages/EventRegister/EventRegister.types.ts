import type { Event, Place } from '../../mocks/event';
import type { Speaker } from '../../mocks/speakers';

type SpeakerItem = {
  speaker_id: number;
  name: string;
  surname: string;
  src?: string;
  company?: string;
  position?: string;
  tag?: string;
  expertise?: string[];
  talks?: Speaker['talks'];
};

type EventRegisterProps = {
  event: Event;
  speakers: SpeakerItem[];
  place: Place;
  onRegister: () => void;
  onSpeakersAll?: () => void;
};

export type { SpeakerItem, EventRegisterProps };
