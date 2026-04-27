type Presentation = {
  presentation_id: number;
  name: string;
  description: string;
  duration: number;
  speakerIds: number[];
};

type Slot = {
  slot_id: number;
  event_id: number;
  presentation_id: number;
  time: number;
  venue_id: number;
};

export type { Presentation, Slot };

export const presentations: Presentation[] = [
  { presentation_id: 1, name: 'Трансформеры: от текста к мультимодальности', description: 'Обзор архитектур трансформеров и их применения в мультимодальных задачах.', duration: 45, speakerIds: [1] },
  { presentation_id: 2, name: 'Генеративные модели для синтеза изображений', description: 'Диффузионные модели и их практическое применение.', duration: 40, speakerIds: [2] },
  { presentation_id: 3, name: 'Обучение с подкреплением в реальных системах', description: 'Практические аспекты применения RL в робототехнике.', duration: 45, speakerIds: [3] },
  { presentation_id: 4, name: 'Объяснимый ИИ: методы и инструменты', description: 'SHAP, LIME и другие подходы к интерпретации моделей.', duration: 35, speakerIds: [4] },
  { presentation_id: 5, name: 'Оптимизация больших языковых моделей', description: 'Квантизация, прунинг и дистилляция знаний.', duration: 50, speakerIds: [5] },
  { presentation_id: 6, name: 'Федеративное обучение и приватность', description: 'Обучение моделей без централизации данных.', duration: 40, speakerIds: [6] },
  { presentation_id: 7, name: 'Панельная дискуссия: будущее ИИ', description: 'Открытая дискуссия ведущих экспертов конференции.', duration: 60, speakerIds: [1, 2, 3, 4, 5, 6] },
  { presentation_id: 8, name: 'Постерная сессия', description: 'Презентация исследовательских работ участников.', duration: 90, speakerIds: [] },
];

export const slots: Slot[] = [
  { slot_id: 1, event_id: 1, presentation_id: 1, time: 1748512800, venue_id: 1 },
  { slot_id: 2, event_id: 1, presentation_id: 2, time: 1748514600, venue_id: 2 },
  { slot_id: 3, event_id: 1, presentation_id: 3, time: 1748516400, venue_id: 1 },
  { slot_id: 4, event_id: 1, presentation_id: 4, time: 1748518200, venue_id: 3 },
  { slot_id: 5, event_id: 1, presentation_id: 5, time: 1748520000, venue_id: 1 },
  { slot_id: 6, event_id: 1, presentation_id: 6, time: 1748521800, venue_id: 2 },
  { slot_id: 7, event_id: 1, presentation_id: 7, time: 1748527200, venue_id: 1 },
  { slot_id: 8, event_id: 1, presentation_id: 8, time: 1748523600, venue_id: 3 },
];
