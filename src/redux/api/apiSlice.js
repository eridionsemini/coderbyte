import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  tagTypes: ['Pokemons', 'Pokemon'],
  endpoints: builder => ({}),
});
