import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Character, CharactersResponse } from '../../../types';
import { API_BASE_URL } from '../../../constants';

export type Suggest = {
  id: number;
  name: string;
};

// Define a service using a base URL and expected endpoints
export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, void>({
      query: () => 'character',
    }),

    getCharactersBySearch: builder.query<CharactersResponse, string>({
      query: (query: string) => {
        return `character?${query}`;
      },
      keepUnusedDataFor: 0,
      providesTags: [{ type: 'Characters', id: 'CharactersBySearch' }],
    }),

    getOneCharacterById: builder.query<Character, string>({
      query: (id: string) => `character/${id}`,
    }),

    getManyCharactersByIds: builder.query<Character[] | Character, string[]>({
      query: (ids: string[]) => `character/${ids.join(',')}`,
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
  useGetCharactersBySearchQuery,
  useGetOneCharacterByIdQuery,
  useGetManyCharactersByIdsQuery,
} = charactersApi;
