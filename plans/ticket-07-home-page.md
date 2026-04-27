# TICKET-07: HomePage — лендинг конференции

## Context
Главная страница — первое, что видит посетитель. Должна дать представление о конференции и направить на программу или регистрацию.

## Файлы (создать)
```
src/pages/HomePage/
├── HomePage.tsx
├── HomePage.module.css
└── index.ts
```

## Секции страницы

### 1. Hero
- Название конференции: `<Text as="h1" size="xxxl" weight="bold">{event.name}</Text>`
- Описание: `<Text size="lg">{event.description}</Text>`
- Дата: `<Icon name="Calendar" />` + `<Text>` (форматировать `event.start_time` unix → читаемая дата)
- Место: `<Icon name="MapPin" />` + `<Text>{place.name}, {place.adress}</Text>` (резолвить через `event.place_id` → `places`)
- Две кнопки: `<Button variant="primary">Программа</Button>` (→ `/schedule`) и `<Button variant="secondary">Спикеры</Button>` (→ `/speakers`)

### 2. О конференции
- Заголовок секции: `<Text as="h2">О конференции</Text>`
- Организатор: `<Text>` (резолвить `event.company_id` → `companies`)

### 3. Ключевые спикеры (preview)
- Заголовок: `<Text as="h2">Ключевые спикеры</Text>`
- Grid из 3 карточек `<SpeakerCard>` (первые 3 из `speakers`)
  - `instituteName` резолвить: `institutes.find(i => i.institute_id === s.institute_id)?.name ?? ''`
  - `countryName` резолвить: `countries.find(c => c.country_id === s.country_id)?.name ?? ''`
- Кнопка «Все спикеры» → `/speakers`

## Данные
- `event`, `places`, `companies`, `countries`, `institutes` из `src/mocks/event.ts`
- `speakers` из `src/mocks/speakers.ts`
- Никакого useState / useEffect — просто импорт констант

## Правила
- Весь текст через `<Text>`
- CSS Modules, нет inline-стилей
- Только `var(--color-*)` токены
- Навигация через `<Link>` / `useNavigate` из react-router-dom

## Зависимости
- TICKET-03 (моки), TICKET-05 (SpeakerCard)

## Проверка
- Страница рендерится на `/`
- Кнопки «Программа» и «Спикеры» ведут на нужные маршруты
- type-check проходит без ошибок
