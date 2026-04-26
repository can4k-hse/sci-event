# TICKET-08: SchedulePage — программа конференции

## Context
Страница со списком всех докладов, сгруппированных по дням.

## Файлы (создать)
```
src/pages/SchedulePage/
├── SchedulePage.tsx
├── SchedulePage.module.css
└── index.ts
```

## Структура страницы

- Заголовок: `<Text as="h1">Программа</Text>`
- Для каждого `ScheduleDay`:
  - Заголовок дня: `<Text as="h2">{day.date}</Text>`
  - Список `<ScheduleItem>` для каждой сессии
  - Для поиска спикера: `speakers.find(s => s.id === session.speakerId)`

## Данные
- `schedule` из `src/mocks/schedule.ts`
- `speakers` из `src/mocks/speakers.ts`
- Только импорт констант — никакого state

## CSS
- Секции дней с отступами между ними
- Только `var(--color-*)` токены

## Зависимости
- TICKET-03 (моки), TICKET-06 (ScheduleItem)

## Проверка
- Все дни и сессии отображаются
- Имена спикеров корректно маппятся по `speakerId`
- type-check чистый
