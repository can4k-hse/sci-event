# TICKET-09: SpeakersPage — все спикеры

## Context
Страница со всеми спикерами конференции в виде сетки карточек.

## Файлы (создать)
```
src/pages/SpeakersPage/
├── SpeakersPage.tsx
├── SpeakersPage.module.css
└── index.ts
```

## Структура страницы

- Заголовок: `<Text as="h1">Спикеры</Text>`
- Grid из всех карточек `<SpeakerCard speaker={s} />` для каждого спикера из мока

## CSS
- CSS Grid: `repeat(auto-fill, minmax(280px, 1fr))`
- Gap между карточками
- Только `var(--color-*)` токены

## Данные
- `speakers` из `src/mocks/speakers.ts`
- Только импорт — никакого state

## Зависимости
- TICKET-03 (моки), TICKET-05 (SpeakerCard)

## Проверка
- Все спикеры отображаются
- Grid адаптируется при разных ширинах
- type-check чистый
