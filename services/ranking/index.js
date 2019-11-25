import 'isomorphic-fetch';

export const commander = (cardId) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/ranking/${cardId}`)
    .then((res) => res.json());
};

export const list = (filter) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/ranking?filter=${filter}`)
    .then((res) => res.json());
};
