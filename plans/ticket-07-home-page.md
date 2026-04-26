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
- Название конференции: `<Text as="h1" size="xxxl" weight="bold">`
- Подзаголовок: `<Text size="lg">`
- Дата и место: `<Text>` + `<Icon name="Calendar" />`, `<Icon name="MapPin" />`
- Две кнопки: `<Button variant="primary">Программа</Button>` (→ `/schedule`) и `<Button variant="secondary">Спикеры</Button>` (→ `/speakers`)

### 2. О конференции
- Заголовок секции: `<Text as="h2" ...>`
- Описание из `conference.description`

### 3. Ключевые спикеры (preview)
- Заголовок: «Ключевые спикеры»
- Grid из 3 карточек `<SpeakerCard>` (первые 3 из `speakers`)
- Кнопка «Все спикеры» → `/speakers`

## Данные
- Все данные из `src/mocks/conference.ts` и `src/mocks/speakers.ts`
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
