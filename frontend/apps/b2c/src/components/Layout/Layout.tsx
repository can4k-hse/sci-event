import { useEffect, useRef } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { BottomSheet } from '@sci-event/ui';
import { SheetNavigationProvider, useSheetNavigation } from '../../navigation';
import { SheetStack } from '../SheetStack';
import { EventRegister } from '../../pages/EventRegister';
import { SpeakersAll } from '../../pages/SpeakersAll';
import { Registration } from '../../pages/Registration';
import { event, places } from '../../mocks/event';
import { speakers } from '../../mocks/speakers';
import styles from './Layout.module.css';

const LayoutInner = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isOpen, stack, closeAll, push } = useSheetNavigation();
  const topFullWidth = stack[stack.length - 1]?.fullWidth ?? false;
  const seededRef = useRef(false);

  useEffect(() => {
    if (!seededRef.current && searchParams.has('register')) {
      seededRef.current = true;
      push(
        <EventRegister
          event={event}
          speakers={speakers}
          place={places.find(p => p.place_id === event.place_id)!}
          onRegister={() =>
            push(
              <Registration onComplete={closeAll} onCancel={closeAll} />,
              { title: 'Регистрация', fullWidth: true }
            )
          }
          onSpeakersAll={() =>
            push(<SpeakersAll speakers={speakers} />, { title: 'Спикеры' })
          }
        />,
        { title: 'Участвовать в мероприятии' }
      );
    }
  }, []);

  const handleClose = () => {
    closeAll();
    setSearchParams(p => { p.delete('register'); return p; });
  };

  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>
      <BottomSheet
        open={isOpen}
        onClose={handleClose}
        className={cn({ [styles.sheetFullWidth]: topFullWidth })}
        overlayClassName={cn({ [styles.overlayFullWidth]: topFullWidth })}
      >
        <SheetStack />
      </BottomSheet>
    </div>
  );
};

const Layout = () => (
  <SheetNavigationProvider>
    <LayoutInner />
  </SheetNavigationProvider>
);

export { Layout };
