# B2C-4: Шаг 3 — `ProfileStep`

**Пакет:** `@sci-event/b2c`
**Приоритет:** 🔴 Высокий

## Дизайн-референс
![Макет регистрации](./image.png)
> Экран: **3. Создание профиля** (верхний ряд, третий) — форма с полями и тегами интересов внизу

## Описание
Третий экран флоу регистрации. Пользователь заполняет данные профиля и выбирает интересы.

## Файлы
```
frontend/apps/b2c/src/pages/Registration/steps/
├── ProfileStep.tsx
└── ProfileStep.module.css
```

## Props
```ts
type ProfileData = {
  fullName: string;
  email: string;
  organization: string;
  position: string;
  interests: string[];
};

type ProfileStepProps = {
  onNext: (data: ProfileData) => void;
};
```

## Компоненты и структура
```tsx
<div className={styles.root}>
  <Text as="h1" size="xxl" weight="bold">Расскажите о себе</Text>
  <Text color="neutral-500">Эта информация поможет персонализировать ваш опыт на мероприятиях.</Text>
  <Input label="Имя и фамилия" value={fullName} onChange={...} />
  <Input label="Email" type="email" value={email} onChange={...} />
  <Input label="Организация" hint="необязательно" value={organization} onChange={...} />
  <Input label="Должность" hint="необязательно" value={position} onChange={...} />
  <Text weight="medium">Ваши интересы</Text>
  <div className={styles.tags}>
    {INTERESTS.map(tag => (
      <Tag
        key={tag}
        variant={selectedInterests.includes(tag) ? 'violet' : 'neutral'}
        onClick={() => toggleInterest(tag)}
      >
        {tag}
      </Tag>
    ))}
  </div>
  <Button variant="primary" disabled={!isValid} onClick={handleNext}>Продолжить</Button>
</div>
```

## Список интересов (константа)
`['AI', 'Data', 'ML', 'Product', 'Dev', 'Design', 'Наука', 'Бизнес']`

## Поведение
- Кнопка "Продолжить" disabled пока `fullName` и `email` не заполнены
- Теги интересов — toggle: клик выбирает/снимает, `variant="violet"` у выбранных
- `div.tags` — `display: flex; flex-wrap: wrap; gap: 8px`

## Связи
- Используется в: `B2C-8` (`Registration`)
