export const getImage = (name, version = 'png') => {
  const url = 'https://api.scryfall.com/cards/named';
  return `${url}?exact=${name}&format=image&version=${version}`;
};
