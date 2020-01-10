import 'isomorphic-fetch';

export const commander = ({ cardId, isCommander, maxResults = 20 }) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/ranking/${cardId}?commander=${isCommander}&maxResults=${maxResults}`)
    .then((res) => res.json());
};

export const average = ({ cardId }) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/ranking/${cardId}/average`)
    .then((res) => res.json());
};

export const list = ({ filter, page = 1, colors }) => {
  const { API_URL } = process.env;
  const params = { filter, page };
  if (colors) {
    params.colors = colors;
  }
  const qs = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return fetch(`${API_URL}/ranking?${qs}`)
    .then((res) => res.json());
};
