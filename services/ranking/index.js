import 'isomorphic-fetch';

export const commander = (cardId) => {
  const { TUTOR_URL } = process.env;
  return fetch(`${TUTOR_URL}/ranking/${cardId}`)
    .then((res) => res.json());
};

export const list = (filter) => {
  const { TUTOR_URL } = process.env;
  return fetch(`${TUTOR_URL}/ranking?filter=${filter}`)
    .then((res) => res.json());
};
