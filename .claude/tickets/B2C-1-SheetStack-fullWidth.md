# B2C-1: Расширение `SheetStack` — режим `fullWidth`

**Пакет:** `@sci-event/b2c`
**Приоритет:** 🟡 Средний

## Дизайн-референс
![Макет регистрации](./image.png)
> Все экраны регистрации занимают полную ширину без боковых отступов и скруглений углов

## Описание
Флоу регистрации должен открываться на полную ширину экрана. Нужно расширить существующий `SheetStack`.

## Файлы для изменения
```
frontend/apps/b2c/src/components/SheetStack/
├── SheetStack.tsx
└── SheetStack.module.css
```

## Изменения

### `SheetStack.tsx`
Добавить `fullWidth?: boolean` в props. При `fullWidth={true}` применять CSS-класс `.fullWidth` к корневому элементу шторки.

### `SheetStack.module.css`
```css
.fullWidth {
  width: 100%;
  max-width: 100%;
  border-radius: 0;
}
```

## Использование
```tsx
<SheetStack fullWidth />
```

## Связи
- Используется в: `B2C-8` (`Registration`) при открытии флоу
