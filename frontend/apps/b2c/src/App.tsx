import { Button } from "@sci-event/ui";
import { useSheetNavigation } from "./navigation";
import { EventRegister } from "./pages/EventRegister";
import { SpeakersAll } from "./pages/SpeakersAll";
import { event, places } from "./mocks/event";
import { speakers } from "./mocks/speakers";
import { useCallback } from "react";

export function App() {
  const { push } = useSheetNavigation();

  const handleSpeakersAll = useCallback(() => {
    push(<SpeakersAll speakers={speakers} />, { title: 'Все спикеры' });
  }, [push]);

  const handleRegistration = useCallback(() => {
    push(
      <EventRegister
        event={event}
        speakers={speakers}
        place={places[0]}
        onRegister={() => { }}
        onSpeakersAll={handleSpeakersAll}
      />
    );
  }, [push, handleSpeakersAll]);

  return <Button onClick={handleRegistration}>Открыть Register</Button>;
}
