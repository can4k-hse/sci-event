# TICKET-06: Компонент ScheduleItem

## Context
Строка расписания — переиспользуется на SchedulePage. Отображает одну сессию/доклад.

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
import { Session } from '../../mocks/schedule';
import { Speaker } from '../../mocks/speakers';

type ScheduleItemProps = {
  session: Session;
  speaker: Speaker | undefined; // может быть undefined если speakerId не найден
};
```

## `ScheduleItem.tsx`
Компоновка в строку:
- Время: `<Text size="sm" weight="bold">` — левая колонка, фиксированная ширина
- Заголовок доклада: `<Text weight="bold">`
- Имя спикера: `<Text size="sm">`
- Зал: `<Text size="sm">` + `<Icon name="MapPin" size={14} />`

## CSS
- Flex-строка с gap между колонками
- Разделитель (border-bottom) между сессиями
- Только `var(--color-*)` токены

## Зависимости
- TICKET-03 (типы `Session`, `Speaker`)

## Проверка
- Рендерится без ошибок при `speaker = undefined`
- TypeScript не жалуется
