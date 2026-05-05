# B2C-2: Шаг 1 — `PhoneStep`

**Пакет:** `@sci-event/b2c`
**Приоритет:** 🔴 Высокий

## Дизайн-референс
![Макет регистрации](./image.png)
> Экран: **1. Ввод номера телефона** (верхний ряд, первый слева)

## Описание
Первый экран флоу регистрации. Пользователь вводит номер телефона для получения SMS-кода.

## Файлы
```
frontend/apps/b2c/src/pages/Registration/steps/
├── PhoneStep.tsx
└── PhoneStep.module.css
```

## Props
```ts
type PhoneStepProps = {
  onNext: (phone: string) => void;
};
```

## Компоненты и структура
```tsx
<div className={styles.root}>
  <Picture name="g320_sms" size={200} />
  <Text as="h1" size="xxl" weight="bold">Добро пожаловать в <Text as="span" color="primary-600">SciEvent</Text>!</Text>
  <Text color="neutral-500">Для начала работы введите номер телефона. Мы отправим код подтверждения.</Text>
  <PhoneInput value={phone} onChange={setPhone} />
  <Button variant="primary" disabled={!isValid} onClick={handleNext}>Продолжить</Button>
  <div className={styles.disclaimer}>
    <Icon name="Lock" size={14} color="neutral-400" />
    <Text size="xs" color="neutral-500">Мы не передаём ваш номер третьим лицам и используем его только для авторизации</Text>
  </div>
</div>
```

## Поведение
- Кнопка "Продолжить" disabled пока поле пустое или номер не прошёл валидацию
- При нажатии — вызов `onNext(phone)`

## Связи
- Зависит от: `UI-3` (`PhoneInput`)
- Используется в: `B2C-8` (`Registration`)
