# TICKET-02: Layout + Header

## Context
Нужна общая оболочка для всех страниц: шапка с навигацией и основной контент-area.

## Файлы (создать)
```
src/components/
├── Layout/
│   ├── Layout.tsx
│   ├── Layout.module.css
│   └── index.ts
└── Header/
    ├── Header.tsx
    ├── Header.module.css
    └── index.ts
```

## Layout
- Рендерит `<Header />` + `<main><Outlet /></main>`
- `main` — центрированный контейнер, `max-width: 1200px`, горизонтальные отступы

## Header
- Левая часть: логотип — название конференции через `<Text>` (берём из `src/mocks/conference.ts`)
- Правая часть: навигационные ссылки через `NavLink` из `react-router-dom`
  - «Главная» → `/`
  - «Программа» → `/schedule`
  - «Спикеры» → `/speakers`
  - «Войти» → `/login` (или имя пользователя если `isAuthenticated`)
- Активная ссылка — отдельный CSS-класс через `NavLink className` callback
- Auth-состояние берётся из Zustand-стора (TICKET-04)

## Правила
- Весь текст через `<Text>`
- Только CSS Modules
- Только `var(--color-*)` токены
- `classnames` для активного класса навлинка

## Зависимости
- TICKET-03 (conference mock) — для названия конференции в логотипе
- TICKET-04 (auth store) — для `isAuthenticated` / имени пользователя

## Проверка
- Шапка видна на всех страницах
- Активная ссылка визуально выделена
- При логине отображается имя, при логауте — «Войти»
