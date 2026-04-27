# EventRegister — корневой компонент шторки

## Context
Собирает все части шторки регистрации в единый компонент. Рендерится внутри `<BottomSheet>` из `@sci-event/ui`. Управляет scroll-областью и sticky action bar.

## Файлы (создать)
```
frontend/apps/b2c/src/pages/EventRegister/
├── EventRegister.tsx
├── EventRegister.types.ts
├── EventRegister.module.css
├── index.ts
└── components/      ← EventHero, EventInfoSection (TICKET-02)
```

## EventRegister.types.ts
```ts
import { Event, Place } from '../../mocks/event';

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
```

## EventRegister.tsx — структура
```tsx
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
      <Text as="a" href={`https://maps.yandex.ru/?text=${encodeURIComponent(place.adress)}`}>
        {place.name}
      </Text>
    </EventInfoSection>
  </div>

  <div className={styles.actions}>
    <Button variant="primary" onClick={onRegister}>Зарегистрироваться</Button>
    <Button variant="ghost" onClick={onClose}>Отложить</Button>
  </div>
</div>
```

## EventRegister.module.css
```css
/* Ключевой трюк: flex-колонка заполняет высоту BottomSheet */
.root    { display: flex; flex-direction: column; height: 100%; }
.scroll  { flex: 1; overflow-y: auto; padding: 16px; }
.actions { flex-shrink: 0; padding: 16px; display: flex; flex-direction: column; gap: 8px; }
```

## Правила
- Весь текст через `<Text>`
- Только CSS Modules, нет inline-стилей
- Только `var(--color-*)` токены

## Зависимости
- TICKET-01 (Avatar + AvatarStack в lib/ui)
- TICKET-02 (EventHero, EventInfoSection)
- TICKET-03 (моки event.ts — типы Event, Place)

## Проверка
- Компонент рендерится без ошибок
- Scroll-область скроллится если контент не помещается
- Action bar всегда виден внизу
- TypeScript не жалуется на пропсы
