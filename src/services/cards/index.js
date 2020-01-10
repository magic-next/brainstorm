import 'isomorphic-fetch';

export const search = (filter) => {
  const controller = new AbortController();
  const { signal } = controller;
  const promise = fetch(`/cards/search?q=${filter}`, { signal })
    .then((res) => res.json());
  return [promise, controller];
};

export const getById = (id) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/cards/${id}`)
    .then((res) => res.json());
};

export const getStats = ({ cardId, asCommander }) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/cards/stats/${cardId}?commander=${asCommander}`)
    .then((res) => res.json());
};
