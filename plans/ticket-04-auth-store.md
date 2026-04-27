# TICKET-04: Zustand auth store

## Context
Нужно глобальное состояние авторизации: знать, залогинен ли пользователь, кто он, и уметь войти/выйти.

## Файлы (создать)
```
src/store/
└── auth.ts
```

## Реализация

```ts
type User = {
  user_id: number;
  credentials_id: number;
  name: string;
  surname: string;
  email: string;
};

type AuthStore = {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};
```

- `login()` — мок: если email и пароль непустые → `isAuthenticated: true`, `user: { user_id: 1, credentials_id: 1, name: 'Участник', surname: 'Конференции', email }`. Иначе — бросает `Error('Неверные данные')`.
- `logout()` — сбрасывает в начальное состояние
- Персистентность **не нужна**
- Использовать `create` из `zustand`

## Зависимости
- Нет (независимый тикет)

## Проверка
- `login('a@b.com', '123456')` → `isAuthenticated = true`, `user.name = 'Участник'`, `user.surname = 'Конференции'`
- `login('', '')` → throws
- `logout()` → `isAuthenticated = false`, `user = null`
