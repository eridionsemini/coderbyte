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
};

const isValidEmail = email => {
  return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
};

const getFirstLetter = name => {
  if (!name || name === '') {
    return '';
  }
  let slices = name.split(' ');
  if (slices.length > 1) {
    return (
      slices[0].substring(0, 1).toLocaleUpperCase() +
      slices[1].substring(0, 1).toLocaleUpperCase()
    );
  }
  return slices[0].substring(0, 1).toLocaleUpperCase();
};

export {
  determinePokemonColor,
  calculateTotalStats,
  determineIfPokemonIsInWishes,
  isValidEmail,
  getFirstLetter,
};
