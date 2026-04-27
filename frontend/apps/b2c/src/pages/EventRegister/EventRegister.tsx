import { AvatarStack, Button, Text } from '@sci-event/ui';
import { EventHero } from './components/EventHero';
import { EventInfoSection } from './components/EventInfoSection';
import styles from './EventRegister.module.css';
import type { EventRegisterProps } from './EventRegister.types';

const EventRegister = ({ event, speakers, place, onRegister, onClose }: EventRegisterProps) => (
  <div className={styles.root}>
    <EventHero title={event.name} />

    <div className={styles.scroll}>
      <EventInfoSection label="Описание">
        <Text>{event.description}</Text>
      </EventInfoSection>

      <EventInfoSection label="Эксперты">
        <AvatarStack items={speakers} max={3} size="md" />
      </EventInfoSection>

      <EventInfoSection label="Место проведения">
        <a href={`https://maps.yandex.ru/?text=${encodeURIComponent(place.adress)}`}>
          <Text as="span">{place.name}</Text>
        </a>
      </EventInfoSection>
    </div>

    <div className={styles.actions}>
      <Button variant="primary" onClick={onRegister}>Зарегистрироваться</Button>
      <Button variant="ghost" onClick={onClose}>Отложить</Button>
    </div>
  </div>
);

export { EventRegister };
