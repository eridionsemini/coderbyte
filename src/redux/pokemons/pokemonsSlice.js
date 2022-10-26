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

        const resultArray = await Promise.all(
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
        return resultArray.length !== 0
          ? {data: resultArray}
          : {error: 'error'};
      },
      providesTags: ['Pokemons'],
    }),
  }),
});

export const {useGetPokemonQuery} = extendedPokemonSlice;
