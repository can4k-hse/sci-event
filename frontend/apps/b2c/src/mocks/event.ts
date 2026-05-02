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
  end_time?: number;
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
  { place_id: 1, name: 'Технопарк Сколково', adress: 'Москва, Большой бульвар, 42, стр. 1' },
];

export const venues: Venue[] = [
  { venue_id: 1, name: 'Зал А', adress: 'Москва, ул. Мясницкая, 11', floor: 1, place_id: 1 },
  { venue_id: 2, name: 'Зал Б', adress: 'Москва, ул. Мясницкая, 11', floor: 2, place_id: 1 },
  { venue_id: 3, name: 'Зал В', adress: 'Москва, ул. Мясницкая, 11', floor: 2, place_id: 1 },
];

export const event: Event = {
  event_id: 1,
  name: 'AI & Data Future 2025',
  description: 'AI & Data Future — крупнейшая конференция о будущем искусственного интеллекта, данных и цифровых технологий. Два дня докладов, дискуссий и нетворкинга с лидерами индустрии. Программа включает пленарные доклады, секционные заседания, воркшопы и постерную сессию.',
  place_id: 1,
  company_id: 1,
  start_time: 1747872000,
  end_time: 1747958400,
};
