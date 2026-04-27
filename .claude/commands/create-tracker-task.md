# Create Yandex Tracker Task

Создай задачу в Яндекс Трекере из файла тикета.

## Аргументы
`$ARGUMENTS` — формат: `{queue} {path/to/ticket.md}`
- `queue`: `FRONT` (b2c) или `FRONTFRAMEWORK` (design system / lib/ui)
- `path`: путь к MD-файлу тикета относительно корня репозитория

Пример: `FRONT plans/eventOnboarding/03-event-register-page.md`

## Алгоритм

1. Разбери аргументы: первое слово — очередь, остаток строки — путь к файлу.
2. Найди корень репозитория: `git rev-parse --show-toplevel`.
3. Прочитай OAuth-токен: `cat "{root}/.tracker"`.
4. Прочитай файл тикета. Извлеки:
   - `summary` — первая строка вида `# ...` (убрать `# `)
   - `description` — полное содержимое файла
5. Сформируй JSON и отправь запрос:

```bash
ROOT=$(git rev-parse --show-toplevel)
TOKEN=$(cat "$ROOT/.tracker")
FILE="$ROOT/{path}"
QUEUE="{queue}"

SUMMARY=$(grep -m1 "^# " "$FILE" | sed 's/^# //')

PAYLOAD=$(python3 -c "
import json, sys
print(json.dumps({
  'queue': sys.argv[1],
  'summary': sys.argv[2],
  'description': open(sys.argv[3]).read()
}))
" "$QUEUE" "$SUMMARY" "$FILE")

curl -s -X POST \
  -H "Authorization: OAuth $TOKEN" \
  -H "X-Cloud-Org-ID: bpfv8mi6c1um4d86jvvb" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD" \
  https://api.tracker.yandex.net/v2/issues/
```

6. Из JSON-ответа возьми поле `key` (например `FRONT-5`).
7. Верни пользователю:
   - Ключ задачи: `FRONT-5`
   - Ссылку: `https://tracker.yandex.ru/FRONT-5`
   - Краткий summary для подтверждения

## Обработка ошибок
- Если `curl` вернул поле `errors` или статус не 201 — покажи текст ошибки и остановись.
- Если файл не найден — сообщи и остановись.
- Никогда не выводи токен в ответе.
