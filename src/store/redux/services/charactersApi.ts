import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  Character,
  CharactersResponse,
  SearchParams,
} from '../../../types';
import { API_BASE_URL } from '../../../constants';

export type Suggest = {
  id: number;
  name: string;
};

// Define a service using a base URL and expected endpoints
export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, void>({
      query: () => 'character',
    }),

    getCharctersBySearch: builder.query<CharactersResponse, SearchParams>({
      query: (params) => {
        const resultQuery = params.reduce(
          (q, param, index) =>
            index > 0
              ? `${q}&${param.key}=${param.value}`
              : `${q}${param.key}=${param.value}`,
          ''
        );
        return `character?${resultQuery}`;
      },
    }),

    getOneCharacterById: builder.query<Character, string>({
      query: (id: string) => `character/${id}`,
    }),

    getSuggestsBySearchText: builder.query<Suggest[], string>({
      query: (searchText) => `character?name=${searchText}`,
      transformResponse: (response: CharactersResponse) => {
        return response.results.map((result) => ({
          id: result.id,
          name: result.name,
        }));
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCharactersQuery,
  useGetSuggestsBySearchTextQuery,
  useGetCharctersBySearchQuery,
  useGetOneCharacterByIdQuery,
} = charactersApi;
