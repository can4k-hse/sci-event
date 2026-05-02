import { Outlet, useSearchParams } from 'react-router-dom';
import { BottomSheet } from '@sci-event/ui';
import { EventRegister } from '../../pages/EventRegister';
import { event, places } from '../../mocks/event';
import { speakers } from '../../mocks/speakers';
import styles from './Layout.module.css';

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpen = searchParams.has('register');

  const handleClose = () =>
    setSearchParams(p => { p.delete('register'); return p; });

  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>

      <BottomSheet open={isOpen} onClose={handleClose} title="Участвовать в мероприятии">
        <EventRegister
          event={event}
          speakers={speakers}
          place={places.find(p => p.place_id === event.place_id)!}
          onRegister={handleClose}
        />
      </BottomSheet>
    </div>
  );
};

export { Layout };
