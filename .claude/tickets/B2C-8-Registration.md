# B2C-8: Оркестратор `Registration`

**Пакет:** `@sci-event/b2c`
**Приоритет:** 🔴 Высокий

## Дизайн-референс
![Макет регистрации](./image.png)
> Весь флоу: экраны 1→2→3→4→5 (верхний ряд слева направо + нижний ряд первый)

## Описание
Корневой компонент флоу регистрации. Управляет общим состоянием и переходами между шагами через `SheetStack`.

## Файлы
```
frontend/apps/b2c/src/pages/Registration/
├── Registration.tsx
├── Registration.module.css
├── steps/
│   ├── PhoneStep.tsx
│   ├── OtpStep.tsx
│   ├── ProfileStep.tsx
│   └── PreferencesStep.tsx
└── screens/
    ├── SuccessScreen.tsx
    └── ExpiredScreen.tsx
```
Добавить реэкспорт в `frontend/apps/b2c/src/pages/index.ts` (если есть).

## Props
```ts
type RegistrationProps = {
  onComplete: () => void;
  onCancel: () => void;
};
```

## Общее состояние флоу
```ts
type RegistrationState = {
  phone: string;
  profile: ProfileData | null;
  preferences: PreferencesData | null;
};
```

## Логика переходов
```
PhoneStep  →(onNext)→  OtpStep  →(onNext)→  ProfileStep  →(onNext)→  PreferencesStep  →(onNext)→  SuccessScreen
                          ↓(onExpired)
                       ExpiredScreen  →(onResend)→  OtpStep (новый таймер)
                                      →(onChangePhone)→  PhoneStep
```

Каждый переход реализуется через `push()` из `useSheetNavigation`. Возврат назад — через кнопку Back в заголовке SheetStack (встроено).

## Использование в `App.tsx`
```tsx
// При нажатии "Буду участвовать" в EventRegister:
const { push } = useSheetNavigation();
push(<Registration onComplete={closeAll} onCancel={closeAll} />, { title: 'Регистрация' });
```

## Связи
- Зависит от: `B2C-1` (SheetStack fullWidth), `B2C-2`–`B2C-7` (все шаги и экраны)
- Вызывается из: `EventRegister` по кнопке "Буду участвовать"
