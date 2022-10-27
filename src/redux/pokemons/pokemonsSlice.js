import {apiSlice} from '../api/apiSlice';

export const extendedPokemonSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getPokemon: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        /// fetch initial Pokemons
        const {limit, offset} = _arg;
        const data = await fetchWithBQ(`?offset=${offset}&limit=${limit}`);
        if (data.error) {
          return {error: data.error};
        }
        const pokemons = data.data;
        const results = await Promise.all(
          pokemons.results.map(async i => {
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

        const merged = [].concat(...results);

        return merged.length !== 0 ? {data: merged} : {error: 'error'};
      },
      transformResponse(baseQueryReturnValue, meta, arg) {
        console.log('yayyahddnjjsdhkjkjsd');
      }
    }),
  }),
});

export const {useGetPokemonQuery} = extendedPokemonSlice;
