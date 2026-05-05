# UI-3: Компонент `PhoneInput`

**Пакет:** `@sci-event/ui`
**Приоритет:** 🟡 Средний

## Дизайн-референс
![Макет регистрации](./image.png)
> Экран: **1. Ввод номера телефона** (верхний ряд, первый слева) — поле с флагом 🇷🇺 и номером "+7 (999) 123-45-67"

## Описание
Поле ввода номера телефона с кастомным дропдауном выбора страны (флаг + код) слева и маской номера. Не использует нативный `<select>`.

## Файлы
```
frontend/lib/ui/src/components/PhoneInput/
├── PhoneInput.tsx
├── PhoneInput.types.ts
├── PhoneInput.module.css
└── index.ts
```
Добавить реэкспорт в `frontend/lib/ui/src/index.ts`.

## Props (`PhoneInput.types.ts`)
```ts
type Country = {
  code: string;     // 'RU' | 'DE' | 'FR'
  dialCode: string; // '+7' | '+49' | '+33'
  flag: string;     // эмодзи флага: '🇷🇺' | '🇩🇪' | '🇫🇷'
  mask: string;     // маска: '(###) ###-##-##' и т.д.
};

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  countryCode?: string;            // default: 'RU'
  onCountryChange?: (code: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
};
```

## Начальный набор стран
| Код | Dial | Флаг | Маска |
|-----|------|------|-------|
| RU  | +7   | 🇷🇺  | (###) ###-##-## |
| DE  | +49  | 🇩🇪  | ### ######## |
| FR  | +33  | 🇫🇷  | # ## ## ## ## |

## Поведение
- Левая часть: флаг + dial-код, клик открывает кастомный dropdown со списком стран
- Dropdown закрывается по клику вне компонента (onClickOutside)
- Правая часть: текстовый input с маской из выбранной страны
- Маска: символ `#` — цифра, остальное — разделители (вставляются автоматически)
- `error` — красная рамка + текст ошибки под полем (как в существующем `Input`)

## Стили
- Общая обёртка выглядит как единый `Input` — та же рамка, border-radius (см. существующий `Input.module.css`)
- Divider между селектором страны и полем: `--color-neutral-200`
- Dropdown: белый фон, тень `--color-shadow`, border-radius, z-index над контентом

## Связи
- Используется в: `B2C-2` (`PhoneStep`)
