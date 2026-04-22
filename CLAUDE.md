# sci-event — Memory Bank

> Этот файл автоматически загружается Claude Code в каждую сессию.  
> Обновляй его при изменении структуры, соглашений или архитектурных решений.

---

## Структура монорепы

```
sci-event/
├── frontend/                    # Корень npm-воркспейса
│   ├── apps/                    # Приложения
│   │   └── test-app/           # React + Vite демо-приложение
│   ├── lib/                     # Переиспользуемые библиотеки
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
| test-app | `frontend/apps/test-app/` | React-приложение | JSX + React 19 + Vite |

---

## Технический стек

- **Package manager:** npm 10+ с native workspaces
- **Build orchestration:** Turborepo 2.x
- **Node:** >= 18.0.0
- **Компонентная библиотека:** TypeScript + TSC (без Vite)
- **Приложения:** JSX + Vite 8 + React plugin с Oxc

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
│   │       ├── {ComponentName}.module.css # CSS Modules стили
│   │       └── index.ts                   # Re-export
│   ├── tokens/
│   │   └── colors.css                     # CSS custom properties (:root)
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
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── public/
├── package.json
├── vite.config.js
└── eslint.config.js
```

### TypeScript (библиотеки)
- `strict: true`
- `target: ES2020`, `module: ESNext`
- `jsxImportSource: react-jsx`
- Нельзя оставлять `noUnusedLocals` / `noUnusedParameters`
- Генерировать `.d.ts` + source maps

### Компонентный паттерн (UI library)
```tsx
// Props всегда extends HTML-атрибуты
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

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
- Экспорт из пакета: `@sci-event/ui/tokens/colors.css` (указывает на `src/tokens/colors.css` напрямую, Vite обработает)

### Конкатенация классов
- Использовать `classnames` (`import cn from 'classnames'`), не ручной `join`

### ESLint
- Flat config (`eslint.config.js`)
- Расширяет `@eslint/js` recommended + React Hooks + React Refresh
- Переменные с заглавной буквы или `_` разрешены как unused

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
npm run dev -w apps/test-app   # один пакет
```

---

## Добавление нового пакета

1. Создать папку в `apps/` или `lib/`
2. Добавить `package.json` с именем `@sci-event/{name}`
3. Добавить скрипты `build`, `dev`, `lint` — Turbo их подхватит автоматически
4. Для библиотек: добавить `tsconfig.json` по образцу `lib/ui/tsconfig.json`
5. Для приложений: добавить `vite.config.js` по образцу `apps/test-app/vite.config.js`

---

## Что обновлять в этом файле

- При добавлении нового пакета — обновить таблицу пакетов и структуру
- При изменении соглашений именования / компонентного паттерна — обновить раздел соглашений
- При изменении toolchain (новые инструменты, смена package manager) — обновить стек
