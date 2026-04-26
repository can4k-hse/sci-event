# Plans — SciEvent B2C Frontend

Декомпозиция плана разработки b2c-приложения.

## Порядок реализации

| Тикет | Описание | Зависимости |
|-------|----------|-------------|
| [TICKET-03](ticket-03-mocks.md) | Моки данных (conference, speakers, schedule) | — |
| [TICKET-04](ticket-04-auth-store.md) | Zustand auth store | — |
| [TICKET-01](ticket-01-routing.md) | Роутинг, очистка App.tsx | TICKET-02 |
| [TICKET-02](ticket-02-layout-header.md) | Layout + Header | TICKET-03, TICKET-04 |
| [TICKET-05](ticket-05-speaker-card.md) | Компонент SpeakerCard | TICKET-03 |
| [TICKET-06](ticket-06-schedule-item.md) | Компонент ScheduleItem | TICKET-03 |
| [TICKET-07](ticket-07-home-page.md) | HomePage — лендинг | TICKET-03, TICKET-05 |
| [TICKET-08](ticket-08-schedule-page.md) | SchedulePage — программа | TICKET-03, TICKET-06 |
| [TICKET-09](ticket-09-speakers-page.md) | SpeakersPage — спикеры | TICKET-03, TICKET-05 |
| [TICKET-10](ticket-10-login-page.md) | LoginPage — форма входа | TICKET-04 |

## Общий план
Полный план разработки: [virtual-spinning-aho.md](../../../.claude/plans/virtual-spinning-aho.md)
