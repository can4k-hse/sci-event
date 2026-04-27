-# TICKET-03: Моки данных

## Context
Данные о конференции пока статические. Структуру нужно сделать такой, чтобы позже легко заменить на API-вызовы через react-query.

## Файлы (создать)
```
src/mocks/
├── event.ts      // Event + справочники (Place, Company, Country, Institute, Venue)
├── speakers.ts   // Speaker[]
└── slots.ts      // Slot[] + Presentation[]
```

## `event.ts`
```ts
type Country = {
  country_id: number;
  name: string;
};

type Institute = {
  institute_id: number;
  name: string;
};

type Company = {
  company_id: number;
  name: string;
};

type Place = {
  place_id: number;
  name: string;
  adress: string;
};

type Venue = {
  venue_id: number;
  name: string;
  adress: string;
  floor: number;
  place_id: number;
};

type Event = {
  event_id: number;
  name: string;
  description: string;
  place_id: number;
  company_id: number;
  start_time: number; // unix timestamp
};

export const countries: Country[] = [ /* 3-5 записей */ ];
export const institutes: Institute[] = [ /* 4-6 записей */ ];
export const companies: Company[] = [ /* 1-2 записи */ ];
export const places: Place[] = [ /* 1-2 записи */ ];
export const venues: Venue[] = [ /* 3-4 зала */ ];
export const event: Event = { ... };
```

## `speakers.ts`
```ts
type Speaker = {
  speaker_id: number;
  credentials_id: number;
  name: string;
  surname: string;
  country_id: number;   // ссылка на Country
  institute_id: number; // ссылка на Institute
  bio: string;
};

export type { Speaker };
export const speakers: Speaker[] = [ /* 6-8 записей */ ];
```

## `slots.ts`
```ts
type Presentation = {
  presentation_id: number;
  name: string;
  description: string;
  duration: number;       // минуты
  speakerIds: number[];   // many2many → Speaker.speaker_id
};

type Slot = {
  slot_id: number;
  event_id: number;
  presentation_id: number;
  time: number;           // unix timestamp
  venue_id: number;       // ссылка на Venue
};

export type { Presentation, Slot };
export const presentations: Presentation[] = [ /* 8-12 записей */ ];
export const slots: Slot[] = [ /* 8-12 записей, по одному на презентацию */ ];
```

## Правила
- Только `type`, не `interface`
- Данные правдоподобные (научная тематика)
- Все типы экспортировать — они нужны компонентам
- `speakerIds` в Presentation должны совпадать с реальными `speaker_id` из speakers
- `presentation_id` в Slot должен совпадать с реальным из presentations
- `venue_id` в Slot должен совпадать с реальным из venues
- `country_id` / `institute_id` в Speaker должны совпадать с реальными из event.ts

## Зависимости
- Нет (первый независимый тикет)

## Проверка
- TypeScript не ругается на импорты из моков
- Все внешние ключи (speakerIds, venue_id, presentation_id, country_id, institute_id) ссылаются на реальные записи
