# UI-1: Компонент `OtpInput`

**Пакет:** `@sci-event/ui`
**Приоритет:** 🔴 Высокий

## Дизайн-референс
![Макет регистрации](./image.png)
> Экраны: **2. Ввод кода из SMS** (верхний ряд, второй слева), **Ошибка: неверный код** (нижний ряд, третий слева), **Ошибка: превышено время** (нижний ряд, четвёртый)

## Описание
6 отдельных однозначных input-ячеек для ввода OTP-кода. Используется на шаге 2 флоу регистрации.

## Файлы
```
frontend/lib/ui/src/components/OtpInput/
├── OtpInput.tsx
├── OtpInput.types.ts
├── OtpInput.module.css
└── index.ts
```
Добавить реэкспорт в `frontend/lib/ui/src/index.ts`.

## Props (`OtpInput.types.ts`)
```ts
type OtpInputProps = {
  length?: number;          // default: 6
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  className?: string;
};
```

## Поведение
- При вводе цифры фокус автоматически переходит на следующую ячейку
- Backspace в пустой ячейке переводит фокус на предыдущую и очищает её
- Paste: вставка строки из 6 цифр распределяется по ячейкам
- `error={true}` — красная рамка на всех ячейках (токен `--color-error-500`), как на экране "Ошибка: неверный код"
- `disabled={true}` — серые ячейки без фокуса, как на экране "Ошибка: превышено время"
- Принимает только цифры (игнорировать нецифровой ввод)

## Стили
- Каждая ячейка — квадратный input, крупный шрифт по центру
- Между ячейками равный gap
- Default border: `--color-neutral-300`
- Focus border: `--color-primary-500`
- Error border: `--color-error-500`
- Disabled: `--color-neutral-100` background, `--color-neutral-300` текст

## Связи
- Используется в: `B2C-3` (`OtpStep`)
