# Complete Yandex Tracker Task

Закрой задачу в Яндекс Трекере — переведи её в финальный статус через transition.

## Аргументы
`$ARGUMENTS` — ключ задачи, например: `FRONTFRAMEWORK-11`

## Алгоритм

1. Разбери аргумент: это ключ задачи (например `FRONT-5` или `FRONTFRAMEWORK-11`).
2. Найди корень репозитория: `git rev-parse --show-toplevel`.
3. Прочитай OAuth-токен: `cat "{root}/.tracker"`.
4. Получи список доступных переходов:

```bash
ROOT=$(git rev-parse --show-toplevel)
TOKEN=$(cat "$ROOT/.tracker")
ISSUE="{key}"

curl -s \
  -H "Authorization: OAuth $TOKEN" \
  -H "X-Cloud-Org-ID: bpfv8mi6c1um4d86jvvb" \
  "https://api.tracker.yandex.net/v2/issues/$ISSUE/transitions"
```

5. Из JSON-ответа выбери transition с `id`, в котором есть `close`, `done`, `resolved`, `finish` или `complete` (в любом регистре). Если таких несколько — предпочти точное совпадение `close`.
6. Выполни переход:

```bash
curl -s -X POST \
  -H "Authorization: OAuth $TOKEN" \
  -H "X-Cloud-Org-ID: bpfv8mi6c1um4d86jvvb" \
  -H "Content-Type: application/json" \
  -d "{}" \
  "https://api.tracker.yandex.net/v2/issues/$ISSUE/transitions/{transitionId}/_execute"
```

7. Верни пользователю:
   - Ключ задачи: `FRONTFRAMEWORK-11`
   - Ссылку: `https://tracker.yandex.ru/FRONTFRAMEWORK-11`
   - Финальный статус задачи из ответа (`status.display`)

## Обработка ошибок
- Если переходы не получены или список пуст — покажи ошибку и остановись.
- Если ни один transition не подходит под критерий — перечисли все доступные `id` и попроси пользователя уточнить.
- Если `curl` вернул ошибку — покажи текст и остановись.
- Никогда не выводи токен в ответе.
