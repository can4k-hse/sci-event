# TICKET-06: Компонент ScheduleItem

## Context
Строка расписания — переиспользуется на SchedulePage. Отображает один слот: время, презентацию, спикеров и зал.

## Файлы (создать)
```
src/components/ScheduleItem/
├── ScheduleItem.tsx
├── ScheduleItem.types.ts
├── ScheduleItem.module.css
└── index.ts
```

## `ScheduleItem.types.ts`
```ts
import { Slot, Presentation } from '../../mocks/slots';
import { Speaker } from '../../mocks/speakers';
import { Venue } from '../../mocks/event';

type ScheduleItemProps = {
  slot: Slot;
  presentation: Presentation;           // резолвится снаружи по slot.presentation_id
  speakers: Speaker[];                   // резолвится снаружи по presentation.speakerIds (может быть [])
  venue: Venue | undefined;             // резолвится снаружи по slot.venue_id
};
```

## `ScheduleItem.tsx`
Компоновка в строку:
- Время: `<Text size="sm" weight="bold">` — форматировать unix timestamp в HH:MM (левая колонка, фиксированная ширина)
- Заголовок доклада: `<Text weight="bold">{presentation.name}</Text>`
- Спикеры: `<Text size="sm">{speakers.map(s => `${s.name} ${s.surname}`).join(', ')}</Text>`
- Зал: `<Icon name="MapPin" size={14} />` + `<Text size="sm">{venue?.name ?? '—'}</Text>`

## CSS
- Flex-строка с gap между колонками
- Разделитель (border-bottom) между элементами
- Только `var(--color-*)` токены

## Зависимости
- TICKET-03 (типы `Slot`, `Presentation`, `Speaker`, `Venue`)

## Проверка
- Рендерится без ошибок при `speakers = []` и `venue = undefined`
- TypeScript не жалуется
