export type CharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  image: string;
  location: { name: string };
  created: string;
};

export type Suggest = {
  id: number;
  name: string;
};

export type SearchParams = { key: string; value: string }[];

export type NonEmptyStringArray = [string, ...string[]];
