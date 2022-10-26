import {apiSlice} from '../api/apiSlice';

const extendedDetailSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getPokemonDetails: build.query({
      query: id => ({url: `${id}/`}),
      providesTags: ['Pokemon'],
    }),
  }),
});

export const {useGetPokemonDetailsQuery} = extendedDetailSlice;
