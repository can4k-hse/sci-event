# Реализовать компонент Picture в @sci-event/ui

Реализовать в библиотеке `@sci-event/ui` компонент `Picture`, который принимает размер и название картинки и отображает её.

## Требования

- Компонент принимает `name` (тип — строгий union всех доступных картинок) и `size`
- Множество доступных картинок задаётся типом `PictureName`:
  - `g320_box`
  - `g320_check`
  - `g320_cloud`
  - `g320_lock`
  - `g320_sms`
  - `g320_wifi`
- Структура: `components/Picture/Picture.tsx` + `Picture.types.ts` + `index.ts`
- Типы в отдельном файле `Picture.types.ts`, только `type` (не `interface`)
- Стили через CSS Modules
