import {apiSlice} from '../api/apiSlice';

export const extendedPokemonSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getPokemon: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        /// fetch initial Pokemons
        const data = await fetchWithBQ(
          `?offset=${_arg.offset}&limit=${_arg.limit}`,
        );
        if (data.error) {
          return {error: data.error};
        }
        const initial = data.data;
        const results = await Promise.all(
          initial.results.map(async i => {
            const detail = await fetchWithBQ(i.url);
            return {
              ...i,
              detail: {
                types: detail.data.types,
                id: detail.data.id,
                image: detail.data.sprites.other.home.front_default,
              },
            };
          }),
        );

        const merged = _arg.pokemonData.concat(...results);
        return merged.length !== 0 ? {data: merged} : {error: 'error'};
      },
    }),
  }),
});

export const {useGetPokemonQuery} = extendedPokemonSlice;
