import 'isomorphic-fetch';
import { types } from '@/utils';

const api = process.env.API_URL;

export const search = (filter) => {
  const controller = new AbortController();
  const { signal } = controller;
  const promise = fetch(`${api}/cards/search?q=${filter}`, { signal })
    .then((res) => res.json());
  return [promise, controller];
};

export const getById = (id) => fetch(`${api}/cards/${id}`)
  .then((res) => res.json());

export const getStats = async ({ cardId, asCommander }) => {
  const { distribuition, ...stats } = await fetch(`${api}/cards/stats/${cardId}?commander=${asCommander}`)
    .then((res) => res.json());
  const formatedData = distribuition.map((item) => ({
    id: item.type,
    label: types[item.type] || item.type,
    value: item.count,
  }));

  return {
    ...stats,
    distribuition: formatedData,
  };
};
