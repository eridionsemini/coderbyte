const isValidEmail = email =>
  new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);

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

export {isValidEmail, getFirstLetter};
