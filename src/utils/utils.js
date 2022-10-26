import {colors} from '../constants/colors';

const determinePokemonColor = type => {
  switch (type) {
    case 'grass':
      return colors.grass;
    case 'bug':
      return colors.grass;
    case 'fire':
      return colors.fire;
    case 'water':
      return colors.water;
    default:
      return colors.yellow;
  }
};

const calculateTotalStats = stats => {
  return stats.reduce((acc, curr) => acc + curr.base_stat, 0);
};

const determineIfPokemonIsInWishes = (wishes, id) => {
  return wishes.some(wish => wish.pokemonId === id);
}

export {determinePokemonColor, calculateTotalStats,determineIfPokemonIsInWishes};
