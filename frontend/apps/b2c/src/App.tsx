import { Button } from "@sci-event/ui";
import { useSheetNavigation } from "./navigation";
import { EventRegister } from "./pages/EventRegister";
import { SpeakersAll } from "./pages/SpeakersAll";
import { Registration } from "./pages/Registration";
import { event, places } from "./mocks/event";
import { speakers } from "./mocks/speakers";
import { useCallback } from "react";

export function App() {
  const { push, closeAll } = useSheetNavigation();

  const handleSpeakersAll = useCallback(() => {
    push(<SpeakersAll speakers={speakers} />, { title: 'Все спикеры' });
  }, [push]);

  const handleRegistration = useCallback(() => {
    push(
      <EventRegister
        event={event}
        speakers={speakers}
        place={places[0]}
        onRegister={() =>
          push(
            <Registration onComplete={closeAll} onCancel={closeAll} />,
            { title: 'Регистрация', fullWidth: true }
          )
        }
        onSpeakersAll={handleSpeakersAll}
      />
    );
  }, [push, closeAll, handleSpeakersAll]);

  return <Button onClick={handleRegistration}>Открыть Register</Button>;
}
