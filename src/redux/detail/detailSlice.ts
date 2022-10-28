import {apiSlice} from '../api/apiSlice';
import {Move} from '../../components/lists/moves/types';
import {Stat, Type} from '../../screens/detail/types';

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
type Form = {
  name: string;
  url: string;
};
type Indices = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

export type PokemonDetail = {
  abilities: Array<Ability>;
  base_experience: number;
  forms: Array<Form>;
  game_indices: Array<Indices>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Move>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
  };
  stats: Array<Stat>;
  types: Array<Type>;
  weight: number;
};

const extendedDetailSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getPokemonDetails: build.query<PokemonDetail, number>({
      query: id => ({url: `${id}/`}),
      providesTags: ['Pokemon'],
    }),
  }),
});

export const {useGetPokemonDetailsQuery} = extendedDetailSlice;
