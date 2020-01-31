import 'isomorphic-fetch';
import { types } from '@/utils';
import { init } from '../../libs/request';

export default ({ apiUrl: baseUrl }) => {
  const request = init({ baseUrl });

  const search = (filter) => {
    const controller = new AbortController();
    const { signal } = controller;
    const promise = request.get(`/cards/search?q=${filter}`, { signal })
      .then((res) => res.json());
    return [promise, controller];
  };

  const getById = (id) => request.get(`/cards/${id}`)
    .then((res) => res.json());

  const getStats = async ({ cardId, asCommander }) => {
    const { distribuition, ...stats } = await request
      .get(`/cards/stats/${cardId}?commander=${asCommander}`)
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

  return Object.freeze({
    search,
    getById,
    getStats,
  });
};
