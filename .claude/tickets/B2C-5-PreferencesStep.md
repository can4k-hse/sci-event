# B2C-5: Шаг 4 — `PreferencesStep`

**Пакет:** `@sci-event/b2c`
**Приоритет:** 🔴 Высокий

## Дизайн-референс
![Макет регистрации](./image.png)
> Экран: **4. Выбор интересов и предпочтений** (верхний ряд, четвёртый справа) — теги тематик + два Toggle внизу

## Описание
Четвёртый экран флоу регистрации. Пользователь выбирает интересующие тематики и настройки уведомлений.

## Файлы
```
frontend/apps/b2c/src/pages/Registration/steps/
├── PreferencesStep.tsx
└── PreferencesStep.module.css
```

## Props
```ts
type PreferencesData = {
  topics: string[];
  notifications: boolean;
  addToCalendar: boolean;
};

type PreferencesStepProps = {
  onNext: (data: PreferencesData) => void;
};
```

## Компоненты и структура
```tsx
<div className={styles.root}>
  <Text as="h1" size="xxl" weight="bold">Что вам интересно?</Text>
  <Text color="neutral-500">Выберите темы, которые вам ближе всего. Это поможет нам рекомендовать интересные мероприятия и доклады.</Text>
  <div className={styles.tags}>
    {TOPICS.map(topic => (
      <Tag
        key={topic}
        variant={selectedTopics.includes(topic) ? 'violet' : 'neutral'}
        onClick={() => toggleTopic(topic)}
      >
        {topic}
      </Tag>
    ))}
  </div>
  <div className={styles.toggles}>
    <Toggle
      checked={notifications}
      onChange={setNotifications}
      label="Получать уведомления о мероприятиях и новостях"
    />
    <Toggle
      checked={addToCalendar}
      onChange={setAddToCalendar}
      label="Добавить мероприятия в календарь"
    />
  </div>
  <Button variant="primary" onClick={handleNext}>Завершить регистрацию</Button>
</div>
```

## Список тематик (константа)
`['Искусственный интеллект', 'Анализ данных', 'Machine Learning', 'Разработка', 'Продукт', 'Стартапы', 'Наука', 'Образование', 'Дизайн', 'Маркетинг', 'Управление', 'Бизнес', 'Другое']`

## Поведение
- Теги тематик — toggle: `variant="violet"` у выбранных
- Toggle-настройки по умолчанию `checked={true}` (как на макете — оба включены)
- Кнопка "Завершить регистрацию" всегда активна (настройки опциональны)

## Связи
- Зависит от: `UI-2` (`Toggle`)
- Переходит в: `B2C-6` (`SuccessScreen`)
- Используется в: `B2C-8` (`Registration`)
