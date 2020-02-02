import 'isomorphic-fetch';
import { types } from '@/utils';
import { init } from '../../libs/request';

export default ({ apiUrl: baseUrl }) => {
  const request = init({ baseUrl });

  const search = ({ q, maxResults = 8, page = 1 }, controller = new AbortController()) => {
    const { signal } = controller || {};
    const qs = `q=${q}&maxResults=${maxResults}&page=${page}`;
    const promise = request.get(`/cards/search?${qs}`, { signal })
      .then((res) => res.json())
      .then((cards) => cards.reduce((prev, card) => {
        if (new RegExp(q, 'i').test(card.portugueseName)) {
          prev.push({ ...card, name: card.portugueseName });
          return prev;
        }
        prev.push(card);
        return prev;
      }, []));
    if (!controller) {
      return promise;
    }
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
