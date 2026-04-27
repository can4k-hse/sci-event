# Avatar + AvatarStack — компоненты в @sci-event/ui

## Context
Нужны переиспользуемые компоненты для отображения аватаров пользователей/спикеров. `Avatar` отображает фото (S3-ссылка) с fallback на иконку-заглушку. `AvatarStack` — горизонтальная стопка с перекрытием, используется в EventRegister для показа спикеров.

## Файлы (создать в lib/ui)
```
frontend/lib/ui/src/components/
├── Avatar/
│   ├── Avatar.tsx
│   ├── Avatar.types.ts
│   ├── Avatar.module.css
│   └── index.ts
└── AvatarStack/
    ├── AvatarStack.tsx
    ├── AvatarStack.types.ts
    ├── AvatarStack.module.css
    └── index.ts
```

## Avatar.types.ts
```ts
type AvatarSize = 'sm' | 'md' | 'lg';

type AvatarProps = {
  src?: string;        // S3 URL; пока отсутствует — показываем заглушку
  name: string;        // alt-текст для img / aria-label для заглушки
  size?: AvatarSize;   // sm→28px, md→40px (default), lg→56px
  className?: string;
};
```

## Avatar.tsx
- `src` задан → `<img src={src} alt={name} className={...} />`
- `src` не задан → `<span aria-label={name}><Icon name="User" /></span>`
- Контейнер: `border-radius: 50%`, `overflow: hidden`, размер через CSS-класс по `size`
- Только `var(--color-*)` токены (фон заглушки — `var(--color-neutral-100)`)

## AvatarStack.types.ts
```ts
type AvatarItem = {
  speaker_id: number;
  name: string;
  surname: string;
  src?: string;
};

type AvatarStackProps = {
  items: AvatarItem[];
  max?: number;      // default 3 — сколько аватаров показывать
  size?: AvatarSize; // пробрасывается в каждый Avatar
  className?: string;
};
```

## AvatarStack.tsx
- Первые `max` элементов → `<Avatar>` с отрицательным `margin-left` для overlap
- Если `items.length > max` → дополнительный кружок `+N` (`var(--color-neutral-200)`)
- `name` для Avatar: `${item.name} ${item.surname}`

## Экспорт
Добавить в `frontend/lib/ui/src/index.ts`:
```ts
export * from './components/Avatar';
export * from './components/AvatarStack';
```

## Зависимости
- Нет (независимый тикет)

## Проверка
- Avatar с `src` рендерит `<img>`
- Avatar без `src` рендерит иконку-заглушку
- AvatarStack из 5 элементов с `max=3` → 3 аватара + кружок `+2`
- `npm run build` в `lib/ui` — без ошибок
