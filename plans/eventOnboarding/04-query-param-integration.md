# Query Param Integration — открытие шторки через URL

## Context
Шторка EventRegister открывается при наличии query-параметра `?register=1` в URL. Логика живёт в `Layout` — это позволяет открыть шторку с любой страницы приложения.

## Файлы (изменить)
```
frontend/apps/b2c/src/components/Layout/Layout.tsx
```

## Реализация

```tsx
import { useSearchParams } from 'react-router-dom';
import { BottomSheet } from '@sci-event/ui';
import { EventRegister } from '../../pages/EventRegister';
import { event, places } from '../../mocks/event';
import { speakers } from '../../mocks/speakers';

// Внутри компонента Layout:
const [searchParams, setSearchParams] = useSearchParams();
const isOpen = searchParams.has('register');

const handleClose = () =>
  setSearchParams(p => { p.delete('register'); return p; });

// В JSX (после основного контента):
<BottomSheet open={isOpen} onClose={handleClose}>
  <EventRegister
    event={event}
    speakers={speakers}
    place={places.find(p => p.place_id === event.place_id)!}
    onRegister={handleClose}   // MVP: регистрация просто закрывает шторку
    onClose={handleClose}
  />
</BottomSheet>
```

## Как открыть шторку
- Программно: `setSearchParams(p => { p.set('register', '1'); return p; })`
- Из кнопки: `<Button onClick={() => setSearchParams({ register: '1' })}>Зарегистрироваться</Button>`
- Вручную: добавить `?register=1` к любому URL

## Правила
- `onRegister` в MVP просто закрывает шторку (handleClose)
- Данные — статический импорт из моков, без state
- При закрытии через overlay/Escape/кнопку — query-param удаляется

## Зависимости
- TICKET-01 (роутинг — нужен Router context для useSearchParams)
- TICKET-02 (Layout существует)
- TICKET-03 (моки event.ts, speakers.ts)
- TICKET-03 eventOnboarding (EventRegister компонент)

## Проверка
1. Открыть `/` → добавить `?register=1` → шторка появляется
2. Нажать «Отложить» → `?register=1` удаляется, шторка закрывается
3. Нажать overlay или Escape → то же поведение
4. Перейти на `/schedule?register=1` → шторка тоже открывается (работает на любом роуте)
5. `npm run type-check` — без ошибок
