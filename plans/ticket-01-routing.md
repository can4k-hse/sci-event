# TICKET-01: Роутинг и очистка App.tsx

## Context
Текущий `App.tsx` — демо-стенд компонентов. Нужно заменить его на настоящий роутер.

## Файлы
- `frontend/apps/b2c/src/App.tsx` — полная замена
- `frontend/apps/b2c/src/App.module.css` — очистить от демо-стилей

## Задача
Настроить `createBrowserRouter` из `react-router-dom`:

```
/           → <HomePage />
/schedule   → <SchedulePage />
/speakers   → <SpeakersPage />
/login      → <LoginPage />
```

- Корневой маршрут оборачивается в `<Layout>` (компонент из TICKET-02)
- Дочерние маршруты рендерятся через `<Outlet />`
- Пока страницы не созданы — использовать временные заглушки `<div>` с `<Text>`
- В `App.module.css` оставить только нужное (или очистить если Layout берёт весь layout)

## Зависимости
- TICKET-02 (Layout) — нужен для обёртки маршрутов

## Проверка
- `http://localhost:5173/` открывается без ошибок
- `/schedule`, `/speakers`, `/login` — открываются (хотя бы заглушки)
- В консоли нет ошибок роутера
