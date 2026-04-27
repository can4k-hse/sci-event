type Speaker = {
  speaker_id: number;
  credentials_id: number;
  name: string;
  surname: string;
  country_id: number;
  institute_id: number;
  bio: string;
};

export type { Speaker };

export const speakers: Speaker[] = [
  { speaker_id: 1, credentials_id: 101, name: 'Алексей', surname: 'Иванов', country_id: 1, institute_id: 1, bio: 'Специалист в области глубокого обучения и обработки естественного языка.' },
  { speaker_id: 2, credentials_id: 102, name: 'Мария', surname: 'Петрова', country_id: 1, institute_id: 2, bio: 'Исследователь в сфере компьютерного зрения и генеративных моделей.' },
  { speaker_id: 3, credentials_id: 103, name: 'Дмитрий', surname: 'Смирнов', country_id: 1, institute_id: 3, bio: 'Эксперт по reinforcement learning и робототехнике.' },
  { speaker_id: 4, credentials_id: 104, name: 'Анна', surname: 'Козлова', country_id: 1, institute_id: 4, bio: 'Занимается исследованиями в области объяснимого ИИ.' },
  { speaker_id: 5, credentials_id: 105, name: 'Hans', surname: 'Müller', country_id: 2, institute_id: 2, bio: 'Профессор, специализирующийся на оптимизации нейронных сетей.' },
  { speaker_id: 6, credentials_id: 106, name: 'Claire', surname: 'Dubois', country_id: 3, institute_id: 1, bio: 'Исследователь в области федеративного обучения и приватности данных.' },
];
