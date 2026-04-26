# TICKET-05: Компонент SpeakerCard

## Context
Переиспользуемая карточка спикера — нужна на HomePage (3 карточки) и SpeakersPage (все карточки).

## Файлы (создать)
```
src/components/SpeakerCard/
├── SpeakerCard.tsx
├── SpeakerCard.types.ts
├── SpeakerCard.module.css
└── index.ts
```

## `SpeakerCard.types.ts`
```ts
import { Speaker } from '../../mocks/speakers';

type SpeakerCardProps = {
  speaker: Speaker;
};
```

## `SpeakerCard.tsx`
Содержимое карточки:
- Иконка-аватар: `<Icon name="User" />` в круглом контейнере
- Имя: `<Text weight="bold">`
- Организация: `<Text size="sm">`
- Тема доклада: `<Text size="sm">`

## CSS
- Карточка: `border`, `border-radius`, `padding`
- Только `var(--color-*)` токены
- Никаких inline-стилей

## Правила
- Весь текст через `<Text>`
- `Icon` из `@sci-event/ui`
- `classnames` если нужна конкатенация классов

## Зависимости
- TICKET-03 (тип `Speaker` из мока)

## Проверка
- Компонент рендерится без ошибок
- TypeScript не жалуется на пропсы
