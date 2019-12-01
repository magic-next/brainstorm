import 'isomorphic-fetch';

export const commander = ({ cardId, isCommander }) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/ranking/${cardId}?commander=${isCommander}`)
    .then((res) => res.json());
};

export const list = (filter, page = 1) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/ranking?filter=${filter}&page=${page}`)
    .then((res) => res.json());
};
