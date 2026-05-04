export type Talk = {
  talk_id: number;
  title: string;
  date: string;
  time_start: string;
  time_end: string;
  venue: string;
};

export type Speaker = {
  speaker_id: number;
  credentials_id: number;
  name: string;
  surname: string;
  country_id: number;
  institute_id: number;
  bio: string;
  company?: string;
  position?: string;
  tag?: string;
  src?: string;
  expertise?: string[];
  talks?: Talk[];
};

export const speakers: Speaker[] = [
  {
    speaker_id: 1,
    credentials_id: 101,
    name: 'Алексей',
    surname: 'Козлов',
    country_id: 1,
    institute_id: 1,
    bio: 'Более 10 лет в области искусственного интеллекта и машинного обучения. Руководит разработкой AI-продуктов в экосистеме Сбера.',
    company: 'Sber AI',
    position: 'CTO',
    tag: 'СПИКЕР',
    expertise: ['Искусственный интеллект', 'Machine Learning', 'NLP', 'Продуктовая разработка', 'Data Science'],
    talks: [
      {
        talk_id: 1,
        title: 'AI в повседневной жизни: что изменится завтра',
        date: '11 июня',
        time_start: '11:00',
        time_end: '11:45',
        venue: 'Зал «Альфа»',
      },
    ],
  },
  {
    speaker_id: 2,
    credentials_id: 102,
    name: 'Мария',
    surname: 'Фёдорова',
    country_id: 1,
    institute_id: 2,
    bio: 'Исследователь в сфере компьютерного зрения и генеративных моделей.',
    company: 'Сбер',
    position: 'Lead Researcher',
    tag: 'СПИКЕР',
    expertise: ['Computer Vision', 'Generative AI', 'Deep Learning'],
    talks: [
      {
        talk_id: 2,
        title: 'Генеративные модели: от теории к продукту',
        date: '11 июня',
        time_start: '14:00',
        time_end: '14:40',
        venue: 'Зал «Бета»',
      },
    ],
  },
  {
    speaker_id: 3,
    credentials_id: 103,
    name: 'Игорь',
    surname: 'Петров',
    country_id: 1,
    institute_id: 3,
    bio: 'Эксперт по reinforcement learning и робототехнике.',
    company: 'VK',
    position: 'Principal Engineer',
    tag: 'ML',
    expertise: ['Reinforcement Learning', 'Robotics', 'MLOps'],
    talks: [],
  },
  {
    speaker_id: 4,
    credentials_id: 104,
    name: 'Анастасия',
    surname: 'Ильина',
    country_id: 1,
    institute_id: 4,
    bio: 'Занимается исследованиями в области объяснимого ИИ.',
    company: 'JetBrains',
    position: 'AI Researcher',
    tag: 'Product',
    expertise: ['Explainable AI', 'Product Strategy'],
    talks: [],
  },
  {
    speaker_id: 5,
    credentials_id: 105,
    name: 'Hans',
    surname: 'Müller',
    country_id: 2,
    institute_id: 2,
    bio: 'Профессор, специализирующийся на оптимизации нейронных сетей.',
    company: 'TU Berlin',
    position: 'Professor',
    tag: 'ML',
    expertise: ['Neural Networks', 'Optimization', 'Federated Learning'],
    talks: [],
  },
  {
    speaker_id: 6,
    credentials_id: 106,
    name: 'Claire',
    surname: 'Dubois',
    country_id: 3,
    institute_id: 1,
    bio: 'Исследователь в области федеративного обучения и приватности данных.',
    company: 'INRIA',
    position: 'Research Scientist',
    tag: 'Data',
    expertise: ['Federated Learning', 'Privacy', 'Data Science'],
    talks: [],
  },
];
