import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Character, CharactersResponse } from '../../../types';
import { API_BASE_URL } from '../../../constants';

export type Suggest = {
  id: number;
  name: string;
};

// Define a service using a base URL and expected endpoints
export const suggestsApi = createApi({
  reducerPath: 'suggestsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
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
export const { useGetSuggestsBySearchTextQuery } = suggestsApi;
