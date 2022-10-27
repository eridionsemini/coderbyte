import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {REACT_APP_POKEMON_API} from '@env';

export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: fetchBaseQuery({baseUrl: REACT_APP_POKEMON_API}),
  tagTypes: ['Pokemons', 'Pokemon'],
  endpoints: builder => ({}),
});
