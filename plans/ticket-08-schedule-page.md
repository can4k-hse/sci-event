# TICKET-08: SchedulePage — программа конференции

## Context
Страница со списком всех слотов конференции, отсортированных по времени.

## Файлы (создать)
```
src/pages/SchedulePage/
├── SchedulePage.tsx
├── SchedulePage.module.css
└── index.ts
```

## Структура страницы

- Заголовок: `<Text as="h1">Программа</Text>`
- Список слотов, отсортированных по `slot.time`, каждый рендерится через `<ScheduleItem>`:
  - `presentation` = `presentations.find(p => p.presentation_id === slot.presentation_id)`
  - `speakers` = `presentation.speakerIds.map(id => speakers.find(s => s.speaker_id === id)).filter(Boolean)`
  - `venue` = `venues.find(v => v.venue_id === slot.venue_id)`

## Данные
- `slots`, `presentations` из `src/mocks/slots.ts`
- `speakers` из `src/mocks/speakers.ts`
- `venues` из `src/mocks/event.ts`
- Только импорт констант — никакого state

## CSS
- Список с отступами между элементами
- Только `var(--color-*)` токены

## Зависимости
- TICKET-03 (моки), TICKET-06 (ScheduleItem)

## Проверка
- Все слоты отображаются, отсортированы по времени
- Спикеры и залы корректно маппятся по id
- type-check чистый
