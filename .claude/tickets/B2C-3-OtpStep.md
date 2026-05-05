# B2C-3: Шаг 2 — `OtpStep`

**Пакет:** `@sci-event/b2c`
**Приоритет:** 🔴 Высокий

## Дизайн-референс
![Макет регистрации](./image.png)
> Экраны: **2. Ввод кода из SMS** (верхний ряд, второй), **Ошибка: неверный код** (нижний ряд, третий), **Ошибка: превышено время** (нижний ряд, четвёртый)

## Описание
Второй экран флоу регистрации. Пользователь вводит 6-значный код из SMS.

## Файлы
```
frontend/apps/b2c/src/pages/Registration/steps/
├── OtpStep.tsx
└── OtpStep.module.css
```

## Props
```ts
type OtpStepProps = {
  phone: string;
  onNext: () => void;
  onExpired: () => void;
  onResend: () => void;
};
```

## Компоненты и структура
```tsx
<div className={styles.root}>
  <Text as="h1" size="xxl" weight="bold">Введите код из SMS</Text>
  <Text color="neutral-500">Мы отправили код подтверждения на номер {phone}</Text>
  <OtpInput value={code} onChange={setCode} error={isError} disabled={isExpired} />
  <Text size="sm" color={isExpired ? 'error-500' : 'neutral-500'}>
    Код действует {formatTime(seconds)}
  </Text>
  {isError && (
    <Text color="error-500" size="sm">Неверный код. Попробуйте ещё раз</Text>
  )}
  <Button variant="ghost" disabled={!isExpired} onClick={onResend}>
    Отправить ещё раз
  </Button>
</div>
```

## Поведение
- Таймер: `useEffect + setInterval`, 90 секунд (1:30), отображается как "MM:SS"
- При заполнении всех 6 цифр — автоматически вызывается проверка кода (мок: любой код кроме "000000" — успех)
- Неверный код → `isError = true`, OtpInput получает `error={true}` (красные рамки)
- Таймер истёк (00:00) → вызов `onExpired()`, OtpInput получает `disabled={true}` (серые ячейки)
- Кнопка "Отправить ещё раз" активна только после истечения таймера

## Связи
- Зависит от: `UI-1` (`OtpInput`)
- Переходит в: `B2C-7` (`ExpiredScreen`) через `onExpired`
- Используется в: `B2C-8` (`Registration`)
