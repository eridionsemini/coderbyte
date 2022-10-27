import {apiSlice} from '../api/apiSlice';

type Pokemon = {};

const extendedDetailSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getPokemonDetails: build.query<Pokemon, number>({
      query: id => ({url: `${id}/`}),
      providesTags: ['Pokemon'],
    }),
  }),
});

export const {useGetPokemonDetailsQuery} = extendedDetailSlice;
