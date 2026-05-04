# B2C-7: Экран истёкшего кода — `ExpiredScreen`

**Пакет:** `@sci-event/b2c`
**Приоритет:** 🟡 Средний

## Дизайн-референс
![Макет регистрации](./image.png)
> Экран: **Ошибка: превышено время** (нижний ряд, четвёртый справа) — серый экран, иконка часов, текст "Время истекло", две кнопки

## Описание
Экран при истечении времени действия SMS-кода. Предлагает запросить новый код или изменить номер.

## Файлы
```
frontend/apps/b2c/src/pages/Registration/screens/
├── ExpiredScreen.tsx
└── ExpiredScreen.module.css
```

## Props
```ts
type ExpiredScreenProps = {
  onResend: () => void;
  onChangePhone: () => void;
};
```

## Компоненты и структура
```tsx
<div className={styles.root}>
  <Icon name="Clock" size={64} color="violet-500" />
  <Text as="h1" size="xxl" weight="bold">Время истекло</Text>
  <Text color="neutral-500">Запросите новый код подтверждения, чтобы продолжить регистрацию.</Text>
  <Button variant="primary" onClick={onResend}>Отправить новый код</Button>
  <Button variant="ghost" onClick={onChangePhone}>Изменить номер телефона</Button>
</div>
```

## Поведение
- "Отправить новый код" → перезапускает таймер и возвращает на `OtpStep` с чистым `OtpInput`
- "Изменить номер телефона" → возвращает на `PhoneStep` (`pop()` до первого шага)

## Связи
- Используется в: `B2C-8` (`Registration`) через `onExpired` из `OtpStep`
