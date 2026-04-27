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
  instituteName: string; // резолвится снаружи через institutes из event.ts
  countryName: string;   // резолвится снаружи через countries из event.ts
};
```

## `SpeakerCard.tsx`
Содержимое карточки:
- Иконка-аватар: `<Icon name="User" />` в круглом контейнере
- Имя и фамилия: `<Text weight="bold">{speaker.name} {speaker.surname}</Text>`
- Институт: `<Text size="sm">{instituteName}</Text>`
- Страна: `<Text size="sm">{countryName}</Text>`
- Биография: `<Text size="sm">{speaker.bio}</Text>` (обрезать через CSS `line-clamp`)

## CSS
- Карточка: `border`, `border-radius`, `padding`
- Bio: `-webkit-line-clamp: 3` для обрезки длинного текста
- Только `var(--color-*)` токены
- Никаких inline-стилей

## Правила
- Весь текст через `<Text>`
- `Icon` из `@sci-event/ui`
- `classnames` если нужна конкатенация классов

## Зависимости
- TICKET-03 (тип `Speaker` из speakers.ts, `institutes` и `countries` из event.ts)

## Проверка
- Компонент рендерится без ошибок
- TypeScript не жалуется на пропсы
