import {apiSlice} from '../api/apiSlice';
import {PokemonDetail} from '../detail/detailSlice';
import type {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {Type} from '../../screens/detail/types';
type InitialPokemon = {
  name: string;
  url: string;
};

type InitialResponse = {
  count: number;
  next: string | null;
  prev: string | null;
  results: Array<InitialPokemon>;
};

type BaseQueryArguments = {
  offset: number;
  limit: number;
  pokemonData: Array<StructuredPokemonData>;
};

type StructuredPokemonData = {
  name: string;
  url: string;
  detail: {
    id: number;
    image: string;
    types: Array<Type>;
  };
};

export const extendedPokemonSlice = apiSlice.injectEndpoints({
  endpoints: build => {
    return {
      getPokemon: build.query<Array<StructuredPokemonData>, BaseQueryArguments>(
        {
          extraOptions: {},
          async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
            /// fetch initial Pokemons
            const data = await fetchWithBQ(
              `?offset=${_arg.offset}&limit=${_arg.limit}`,
            );
            if (data.error) {
              return {error: data.error as FetchBaseQueryError};
            }
            const initial = data.data as InitialResponse;

            /// get details for each Pokemon
            const results = await Promise.all(
              initial.results.map(async i => {
                const detail = (await fetchWithBQ(i.url))
                  .data as unknown as PokemonDetail;
                return {
                  ...i,
                  detail: {
                    types: detail.types,
                    id: detail.id,
                    image: detail.sprites.other.home.front_default,
                  },
                };
              }),
            );

            if (results) {
              return {
                data: _arg.pokemonData.concat(
                  ...results,
                ) as Array<StructuredPokemonData>,
              };
            }

            return {error: {error: 'error'} as FetchBaseQueryError};
          },
        },
      ),
    };
  },
});

export const {useGetPokemonQuery} = extendedPokemonSlice;
