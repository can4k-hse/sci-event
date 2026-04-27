type Country = {
  country_id: number;
  name: string;
};

type Institute = {
  institute_id: number;
  name: string;
};

type Company = {
  company_id: number;
  name: string;
};

type Place = {
  place_id: number;
  name: string;
  adress: string;
};

type Venue = {
  venue_id: number;
  name: string;
  adress: string;
  floor: number;
  place_id: number;
};

type Event = {
  event_id: number;
  name: string;
  description: string;
  place_id: number;
  company_id: number;
  start_time: number;
};

export type { Country, Institute, Company, Place, Venue, Event };

export const countries: Country[] = [
  { country_id: 1, name: 'Россия' },
  { country_id: 2, name: 'Германия' },
  { country_id: 3, name: 'Франция' },
];

export const institutes: Institute[] = [
  { institute_id: 1, name: 'Институт прикладной математики РАН' },
  { institute_id: 2, name: 'МГУ им. М.В. Ломоносова' },
  { institute_id: 3, name: 'МФТИ' },
  { institute_id: 4, name: 'Сколтех' },
];

export const companies: Company[] = [
  { company_id: 1, name: 'НИУ ВШЭ' },
];

export const places: Place[] = [
  { place_id: 1, name: 'Конгресс-центр НИУ ВШЭ', adress: 'Москва, ул. Мясницкая, 11' },
];

export const venues: Venue[] = [
  { venue_id: 1, name: 'Зал А', adress: 'Москва, ул. Мясницкая, 11', floor: 1, place_id: 1 },
  { venue_id: 2, name: 'Зал Б', adress: 'Москва, ул. Мясницкая, 11', floor: 2, place_id: 1 },
  { venue_id: 3, name: 'Зал В', adress: 'Москва, ул. Мясницкая, 11', floor: 2, place_id: 1 },
];

export const event: Event = {
  event_id: 1,
  name: 'Научная конференция по искусственному интеллекту 2025',
  description: 'Ежегодная конференция, объединяющая ведущих учёных и практиков в области машинного обучения, нейронных сетей и компьютерного зрения. Программа включает пленарные доклады, секционные заседания и постерную сессию.',
  place_id: 1,
  company_id: 1,
  start_time: 1748512800,
};
