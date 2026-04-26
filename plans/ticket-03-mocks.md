# TICKET-03: Моки данных

## Context
Данные о конференции пока статические. Структуру нужно сделать такой, чтобы позже легко заменить на API-вызовы через react-query.

## Файлы (создать)
```
src/mocks/
├── conference.ts
├── speakers.ts
└── schedule.ts
```

## `conference.ts`
```ts
type ConferenceInfo = {
  title: string;
  subtitle: string;
  dateRange: string;   // "15–17 мая 2025"
  location: string;    // "Москва, НИУ ВШЭ"
  description: string;
};

export const conference: ConferenceInfo = { ... };
```

## `speakers.ts`
```ts
type Speaker = {
  id: string;
  name: string;
  affiliation: string; // организация / университет
  topic: string;       // тема доклада
  bio: string;
};

export const speakers: Speaker[] = [ /* 6-8 записей */ ];
```

## `schedule.ts`
```ts
type Session = {
  id: string;
  time: string;        // "10:00–10:45"
  title: string;
  speakerId: string;   // ссылка на Speaker.id
  room: string;        // "Зал A"
};

type ScheduleDay = {
  date: string;        // "15 мая"
  sessions: Session[];
};

export const schedule: ScheduleDay[] = [ /* 2-3 дня */ ];
```

## Правила
- Только `type`, не `interface`
- Данные правдоподобные (научная тематика)
- Все типы экспортировать — они нужны компонентам
- `speakerId` в расписании должен совпадать с реальными `id` из speakers

## Зависимости
- Нет (первый независимый тикет)

## Проверка
- TypeScript не ругается на импорты из мока
- `speakerId` в расписании совпадает с `id` из speakers
