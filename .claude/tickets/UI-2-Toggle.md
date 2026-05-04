# UI-2: Компонент `Toggle`

**Пакет:** `@sci-event/ui`
**Приоритет:** 🔴 Высокий

## Дизайн-референс
![Макет регистрации](./image.png)
> Экран: **4. Выбор интересов и предпочтений** (верхний ряд, четвёртый справа) — два Toggle внизу экрана: "Получать уведомления" и "Добавить мероприятия в календарь", оба в состоянии on (фиолетовый трек)

## Описание
Switch-переключатель в iOS-стиле. Используется в шаге 4 флоу регистрации для управления настройками уведомлений.

## Файлы
```
frontend/lib/ui/src/components/Toggle/
├── Toggle.tsx
├── Toggle.types.ts
├── Toggle.module.css
└── index.ts
```
Добавить реэкспорт в `frontend/lib/ui/src/index.ts`.

## Props (`Toggle.types.ts`)
```ts
type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
};
```

## Поведение
- Клик по треку или label меняет `checked` через `onChange`
- `disabled` — не реагирует на клики, приглушённые цвета
- `label` рендерится через `<Text>` слева от переключателя (label занимает всю доступную ширину, toggle прижат вправо)

## Стили
- Трек: `--color-primary-600` (on) / `--color-neutral-300` (off)
- Кружок (thumb): `--color-white`
- Анимация: CSS transition на `transform` thumb и `background-color` трека
- Размер трека: ~51×31px (стандарт iOS)
- `disabled`: трек `--color-neutral-200`, thumb `--color-neutral-100`

## Связи
- Используется в: `B2C-5` (`PreferencesStep`)
