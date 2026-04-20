# Sci-Event Frontend Monorepo

Монорепозиторий фронтенда на базе **npm workspaces** и **turborepo**.

## Структура

```
frontend/
├── apps/                 # Приложения
│   └── test-app/        # React приложение на Vite
├── lib/                 # Переиспользуемые библиотеки
├── package.json         # Root workspace конфиг
├── turbo.json          # Turborepo конфиг
└── README.md
```

## Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Разработка

```bash
npm run dev
```

Запустит dev-серверы всех приложений параллельно.

### Сборка

```bash
npm run build
```

### Линтинг

```bash
npm run lint
```

### Тестирование

```bash
npm run test
```

### Очистка

```bash
npm run clean
```

## Добавление нового пакета

### Новое приложение

```bash
cd apps
npm create vite@latest my-app -- --template react
```

Пакет автоматически подхватится через workspaces.

### Новая библиотека

Создай в `lib/` папку с `package.json`:

```json
{
  "name": "@sci-event/my-lib",
  "version": "1.0.0",
  "main": "src/index.js",
  "private": true
}
```

Используй в других пакетах:

```bash
npm install @sci-event/my-lib
```

## Технологический стек

- **npm 10+** - Package manager с встроенной поддержкой workspaces
- **turborepo** - Оркестрация задач и кэширование
- **React 18** - Для приложений
- **Vite** - Build tool и dev server
- **Node 20 LTS** - Runtime

## Полезные команды

Запуск конкретного пакета:

```bash
npm run dev -w apps/test-app
```

Сборка только одного пакета:

```bash
npm run build -w apps/test-app
```

Просмотр структуры workspace:

```bash
npm ls
```