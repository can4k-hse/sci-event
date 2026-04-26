# sci-event — Memory Bank

> Этот файл автоматически загружается Claude Code в каждую сессию.  
> Обновляй его при изменении структуры, соглашений или архитектурных решений.

---

## Структура монорепы

```
sci-event/
├── frontend/                    # Корень npm-воркспейса
│   ├── apps/
│   │   └── b2c/                # @sci-event/b2c — B2C-приложение
│   ├── lib/
│   │   └── ui/                 # Shared UI component library (@sci-event/ui)
│   ├── package.json             # Workspace root (apps/*, lib/*)
│   └── turbo.json              # Turborepo task pipeline
└── CLAUDE.md                    # Этот файл
```

---

## Пакеты

| Пакет | Путь | Тип | Стек |
|-------|------|-----|------|
| `@sci-event/ui` | `frontend/lib/ui/` | Компонентная библиотека | TypeScript + React 18+ |
| `@sci-event/b2c` | `frontend/apps/b2c/` | Приложение | TypeScript + Vite 6 + React |

---

## Технический стек

- **Package manager:** npm 10+ с native workspaces
- **Build orchestration:** Turborepo 2.x
- **Node:** >= 18.0.0
- **Компонентная библиотека:** TypeScript + TSC (без Vite)
- **Приложения:** TypeScript + Vite 6 + @vitejs/plugin-react

---

## Соглашения

### Именование
- Пакеты: `@sci-event/{name}` (scope)
- Компоненты: `PascalCase` (`Button.tsx`)
- Папки компонентов: `components/{ComponentName}/{ComponentName}.tsx` + `index.ts`
- Barrel exports: каждая папка имеет `index.ts`

### Структура библиотечного пакета (`lib/*`)
```
lib/{name}/
├── src/
│   ├── components/
│   │   └── {ComponentName}/
│   │       ├── {ComponentName}.tsx        # Реализация
│   │       ├── {ComponentName}.types.ts   # Все типы и интерфейсы компонента
│   │       ├── {ComponentName}.module.css # CSS Modules стили
│   │       └── index.ts                   # Re-export
│   ├── tokens/
│   │   ├── colors.css                     # CSS custom properties (:root)
│   │   └── fonts.css                      # @font-face декларации (Montserrat)
│   ├── css-modules.d.ts                   # Типы для *.module.css
│   └── index.ts                           # Barrel export всего пакета
├── dist/                                  # Артефакты сборки (не коммитить)
├── package.json
└── tsconfig.json
```

### Структура app-пакета (`apps/*`)
```
apps/{name}/
├── src/
│   ├── App.tsx
│   ├── App.module.css     # CSS Modules — никаких inline-стилей
│   ├── main.tsx
│   ├── index.css          # Глобальные стили: импорт fonts.css + body reset
│   ├── css-modules.d.ts   # Типы для *.module.css
│   └── assets/
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

### TypeScript (библиотеки)
- `strict: true`
- `target: ES2020`, `module: ESNext`
- `jsxImportSource: react-jsx`
- Нельзя оставлять `noUnusedLocals` / `noUnusedParameters`
- Генерировать `.d.ts` + source maps

### TypeScript (приложения)
- `strict: true`, `moduleResolution: bundler`, `noEmit: true`
- `allowImportingTsExtensions: true`
- TSC только для type-check (`npm run type-check`), сборку делает Vite

### Компонентный паттерн (UI library)
```tsx
// Props всегда extends HTML-атрибуты, типы в отдельном {ComponentName}.types.ts
// Используем только type, не interface
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

// Стилизация через CSS Modules + classnames
import cn from 'classnames';
import styles from './Button.module.css';

const cls = cn(styles.button, styles[variant], styles[size], className);
<button className={cls} {...props} />
```

### Токены (CSS custom properties)
- Токены живут в `src/tokens/colors.css` как `:root { --color-* }` переменные
- Каждый компонент подключает их через `@import '../../tokens/colors.css'` в своём `.module.css`
- Потребитель библиотеки ничего не импортирует руками — токены подтягиваются автоматически при использовании компонента
- Шкала: `--color-{category}-{50..900}`, категории: `primary`, `neutral`, `success`, `warning`, `error`
- Специальные токены: `--color-overlay` (rgba overlay), `--color-shadow` (rgba тень), `--color-white`, `--color-black`
- Экспорт: `@sci-event/ui/tokens/colors.css`, `@sci-event/ui/tokens/fonts.css`
- **Нельзя хардкодить цвета** — никаких hex, rgb(), rgba() в компонентах. Нет нужного токена — добавь в `colors.css`

### Шрифты
- Montserrat самохостится через `@fontsource/montserrat` (зависимость `@sci-event/ui`)
- `@font-face` декларации в `lib/ui/src/tokens/fonts.css` — latin + cyrillic subsets, веса 400/500/600/700
- `font-display: block` — нет FOUT, нет прыжка
- Приложение подключает: `@import '@sci-event/ui/tokens/fonts.css'` в своём `index.css`
- `font-family: 'Montserrat', sans-serif` задаётся в глобальном `body` стиле приложения

### Иконки
- Иконки через компонент `<Icon>` из `@sci-event/ui`, базируется на `react-feather`
- `name` — строго типизированный union всех feather-иконок (`IconName`)
- Дефолт: `size=24`, `strokeWidth=2`, `color='currentColor'`

```tsx
import { Icon } from '@sci-event/ui';
<Icon name="Search" size={20} />
<Icon name="X" size={16} color="var(--color-neutral-500)" />
```

### Текст — ВАЖНЕЙШЕЕ ПРАВИЛО
- **Весь текст в UI рендерится только через `<Text>`** — никакого plaintext, `<p>`, `<span>`, `<h1>`–`<h6>` и т.д. напрямую
- Это распространяется на все приложения и компоненты, которые используют `@sci-event/ui`
- Исключение: внутренние реализации самих компонентов библиотеки (например, label внутри Input)

```tsx
// ❌ Нельзя
<p>Привет</p>
<span>Текст</span>

// ✅ Правильно
<Text>Привет</Text>
<Text as="span">Текст</Text>
<Text as="h1" size="xxxl" weight="bold">Заголовок</Text>
```

### Стили в приложениях
- Только CSS Modules — никаких inline-стилей (`style={...}`)
- Глобальные стили (reset, font-family) — в `src/index.css`
- Компонентные стили — в `{Component}.module.css`
- Импорт шрифтов через `@import '@sci-event/ui/tokens/fonts.css'` в `index.css`

### Конкатенация классов
- Использовать `classnames` (`import cn from 'classnames'`), не ручной `join`

### ESLint
- Flat config (`eslint.config.js`)
- Расширяет `@eslint/js` recommended + React Hooks + React Refresh
- Файлы: `**/*.{js,jsx,ts,tsx}`
- Переменные с заглавной буквы или `_` разрешены как unused

---

## Компоненты UI-библиотеки

| Компонент | Описание |
|-----------|----------|
| `Text` | Типографика. Обязателен для любого текста в UI |
| `Button` | Кнопка. variant: primary/secondary/ghost, size: sm/md/lg |
| `Input` | Текстовый ввод с label, hint, error |
| `Checkbox` | Чекбокс с label, error |
| `Radio` | Радиокнопка с label |
| `Select` | Выпадающий список |
| `Modal` | Модальное окно (портал, Escape, overlay) |
| `BottomSheet` | Шторка снизу для мобилок (портал, Escape, анимация slideUp) |
| `Toast` | Уведомление. variant: info/success/warning/error |
| `Spinner` | Индикатор загрузки |
| `Icon` | SVG-иконка из feather-icons |

---

## Turborepo pipeline

```json
dev   → зависит от ^build, интерактивный, без кеша
build → зависит от ^build, кешируется, output: dist/**
lint  → кешируется, output: lint-reports/**
test  → кешируется, output: coverage/**
```

Запуск из `frontend/`:
```bash
npm run dev          # все dev серверы параллельно
npm run build        # полная сборка с кешем
npm run dev -w apps/b2c   # один пакет через npm workspaces
```

Скрипты в `apps/b2c/package.json`:
- `dev` — vite напрямую
- `dev:turbo` — через turbo с фильтром (`turbo run dev --filter=@sci-event/b2c`)
- `type-check` — проверка типов без сборки

---

## Добавление нового пакета

1. Создать папку в `apps/` или `lib/`
2. Добавить `package.json` с именем `@sci-event/{name}`
3. Добавить скрипты `build`, `dev`, `lint` — Turbo их подхватит автоматически
4. Для библиотек: добавить `tsconfig.json` по образцу `lib/ui/tsconfig.json`
5. Для приложений: добавить `tsconfig.json` + `vite.config.ts` по образцу `apps/b2c/`

---

## Что обновлять в этом файле

- При добавлении нового пакета — обновить таблицу пакетов и структуру
- При добавлении нового компонента — обновить таблицу компонентов
- При изменении соглашений именования / компонентного паттерна — обновить раздел соглашений
- При изменении toolchain (новые инструменты, смена package manager) — обновить стек
