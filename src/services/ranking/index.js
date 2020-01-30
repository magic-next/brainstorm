import 'isomorphic-fetch';

const api = process.env.API_URL;

export const commander = ({ cardId, isCommander, maxResults = 20 }) => (
  fetch(`${api}/ranking/${cardId}?commander=${isCommander}&maxResults=${maxResults}`)
    .then((res) => res.json())
);

export const average = async ({ card }) => {
  const deck = await fetch(`${api}/ranking/${card.id}/average`)
    .then((res) => res.json());
  return {
    cards: [
      { ...card, count: 1, extra: 'commander' },
      ...deck,
    ],
  };
};

export const list = ({ filter, page = 1, colors }) => {
  const params = { filter, page };
  if (colors) {
    params.colors = colors;
  }
  const qs = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return fetch(`${api}/ranking?${qs}`)
    .then((res) => res.json());
};
