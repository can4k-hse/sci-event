# TICKET-10: LoginPage — форма входа

## Context
Страница авторизации. Только вход (без регистрации). Данные валидируются через zod, при успехе — пользователь попадает на главную.

## Файлы (создать)
```
src/pages/LoginPage/
├── LoginPage.tsx
├── LoginPage.module.css
└── index.ts
```

## Структура страницы

- Заголовок: `<Text as="h1">Вход</Text>`
- `<Input label="Email" type="email" />` — управляется через `useState`
- `<Input label="Пароль" type="password" />` — управляется через `useState`
- `<Button variant="primary" type="submit">Войти</Button>`
- Ошибка валидации — показывается через `<Input error="...">` или `<Toast>`

## Логика

```ts
const schema = z.object({
  email: z.string().email('Некорректный email'),
  password: z.string().min(6, 'Минимум 6 символов'),
});
```

1. При сабмите — `schema.safeParse({ email, password })`
2. Если ошибки — показать в соответствующих полях `<Input error="...">`
3. Если данные валидны — `await auth.login(email, password)`
4. Если `login` бросил ошибку — показать `<Toast variant="error">` с текстом ошибки
5. Если успех — `navigate('/')`

## Состояние
- `email: string` + `password: string` через `useState` (без react-hook-form)
- `emailError: string` + `passwordError: string` через `useState`
- Toast показывается через локальный `useState<boolean>`

## Правила
- Весь текст через `<Text>`
- Никаких inline-стилей
- Форма центрирована, `max-width: 400px`

## Зависимости
- TICKET-04 (auth store)

## Проверка
- Пустой email/пароль → ошибки под полями
- Короткий пароль → ошибка под полем пароля
- Валидные данные → `isAuthenticated = true`, редирект на `/`
- Повторная проверка: хедер показывает имя пользователя
