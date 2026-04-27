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
- Grid из всех карточек — для каждого спикера:
  ```tsx
  <SpeakerCard
    speaker={s}
    instituteName={institutes.find(i => i.institute_id === s.institute_id)?.name ?? ''}
    countryName={countries.find(c => c.country_id === s.country_id)?.name ?? ''}
  />
  ```

## CSS
- CSS Grid: `repeat(auto-fill, minmax(280px, 1fr))`
- Gap между карточками
- Только `var(--color-*)` токены

## Данные
- `speakers` из `src/mocks/speakers.ts`
- `institutes`, `countries` из `src/mocks/event.ts`
- Только импорт — никакого state

## Зависимости
- TICKET-03 (моки), TICKET-05 (SpeakerCard)

## Проверка
- Все спикеры отображаются с правильными институтами и странами
- Grid адаптируется при разных ширинах
- type-check чистый
