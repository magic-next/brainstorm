import 'isomorphic-fetch';

export const search = (filter) => {
  const { API_URL } = process.env;
  const controller = new AbortController();
  const { signal } = controller;
  const promise = fetch(`${API_URL}/cards/search?q=${filter}`, { signal })
    .then((res) => res.json());
  return [promise, controller];
};

export const getById = (id) => {
  const { API_URL } = process.env;
  return fetch(`${API_URL}/cards/${id}`)
    .then((res) => res.json());
};