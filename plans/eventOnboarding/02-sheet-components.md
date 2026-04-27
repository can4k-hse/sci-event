# EventHero + EventInfoSection — локальные компоненты страницы EventRegister

## Context
Примитивы для сборки шторки регистрации. Живут в папке страницы, не в глобальных компонентах, так как специфичны для EventRegister.

## Файлы (создать)
```
frontend/apps/b2c/src/pages/EventRegister/components/
├── EventHero/
│   ├── EventHero.tsx
│   ├── EventHero.types.ts
│   ├── EventHero.module.css
│   └── index.ts
└── EventInfoSection/
    ├── EventInfoSection.tsx
    ├── EventInfoSection.types.ts
    ├── EventInfoSection.module.css
    └── index.ts
```

## EventHero

### EventHero.types.ts
```ts
type EventHeroProps = {
  title: string;
};
```

### EventHero.tsx
```tsx
<div className={styles.hero}>
  <Text as="h1" size="xl" weight="bold">{title}</Text>
</div>
```

### EventHero.module.css
- `background: var(--color-primary-500)`
- `color: var(--color-white)` — передаётся через `currentColor` в `<Text>`
- `border-radius` только на верхних углах: `border-radius: 16px 16px 0 0`
- `padding`: достаточный для визуального дыхания

## EventInfoSection

### EventInfoSection.types.ts
```ts
import { ReactNode } from 'react';

type EventInfoSectionProps = {
  label: string;
  children: ReactNode;
};
```

### EventInfoSection.tsx
```tsx
<section className={styles.section}>
  <Text weight="bold" size="sm">{label}</Text>
  <div className={styles.content}>{children}</div>
</section>
```

### EventInfoSection.module.css
- Вертикальный gap между label и content
- Отступ снизу между секциями

## Правила
- Весь текст через `<Text>`
- Только CSS Modules, нет inline-стилей
- Только `var(--color-*)` токены

## Зависимости
- Нет (независимые компоненты)

## Проверка
- Рендерятся без ошибок
- TypeScript не жалуется
