# Execute Yandex Tracker Task

Прочитай задачу из Яндекс Трекера и выполни её.

## Аргументы
`$ARGUMENTS` — ключ задачи, например: `FRONTFRAMEWORK-11`

## Алгоритм

1. Разбери аргумент: это ключ задачи (например `FRONT-5` или `FRONTFRAMEWORK-11`).
2. Найди корень репозитория: `git rev-parse --show-toplevel`.
3. Прочитай OAuth-токен: `cat "{root}/.tracker"`.

4. Получи данные задачи:

```bash
ROOT=$(git rev-parse --show-toplevel)
TOKEN=$(cat "$ROOT/.tracker")
ISSUE="{key}"

curl -s \
  -H "Authorization: OAuth $TOKEN" \
  -H "X-Cloud-Org-ID: bpfv8mi6c1um4d86jvvb" \
  "https://api.tracker.yandex.net/v2/issues/$ISSUE"
```

5. Из JSON-ответа извлеки:
   - `summary` — заголовок задачи
   - `description` — описание (может быть в формате Markdown или Яндекс Wiki)
   - `type.display` — тип задачи
   - `status.display` — текущий статус

6. **Выполни задачу**: интерпретируй `summary` и `description` как инструкцию и выполни её. Это может быть рефакторинг, написание кода, создание файла, обновление документации — что угодно, что описано в задаче.

7. После выполнения — закрой задачу:

```bash
curl -s \
  -H "Authorization: OAuth $TOKEN" \
  -H "X-Cloud-Org-ID: bpfv8mi6c1um4d86jvvb" \
  "https://api.tracker.yandex.net/v2/issues/$ISSUE/transitions"
```

   Выбери transition с `id`, содержащим `close`, `done`, `resolved`, `finish` или `complete` (предпочти точное `close`).

```bash
curl -s -X POST \
  -H "Authorization: OAuth $TOKEN" \
  -H "X-Cloud-Org-ID: bpfv8mi6c1um4d86jvvb" \
  -H "Content-Type: application/json" \
  -d "{}" \
  "https://api.tracker.yandex.net/v2/issues/$ISSUE/transitions/{transitionId}/_execute"
```

8. Верни пользователю:
   - Ключ задачи и ссылку: `https://tracker.yandex.ru/{key}`
   - Что было сделано (краткое резюме выполненной работы)
   - Финальный статус задачи из ответа (`status.display`)

## Обработка ошибок
- Если задача не найдена (404) — покажи ошибку и остановись.
- Если `description` пуст — используй только `summary` как инструкцию.
- Если задача уже в финальном статусе — сообщи об этом и не выполняй переход повторно.
- Если переходы не получены или список пуст — покажи ошибку и остановись.
- Если ни один transition не подходит — перечисли все доступные `id` и попроси уточнить.
- Никогда не выводи токен в ответе.