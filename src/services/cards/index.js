import 'isomorphic-fetch';
import { types } from '@/utils';
import { init } from '../../libs/request';

export default ({ apiUrl: baseUrl }) => {
  const request = init({ baseUrl });

  const search = (config, controller = new AbortController()) => {
    const {
      q,
      maxResults = 8,
      page = 1,
      expand = true,
    } = config;
    const { signal } = controller || {};
    const qs = `q=${q}&maxResults=${maxResults}&page=${page}`;
    const promise = request.get(`/cards/search?${qs}`, { signal })
      .then((res) => res.json())
      .then((res) => {
        const results = res.results.reduce((prev, card) => {
          const ptTest = new RegExp(q, 'i').test(card.portugueseName);
          if (ptTest) {
            prev.push({ ...card, name: card.portugueseName });
          }
          if ((!ptTest || expand) && card.name !== card.portugueseName) {
            prev.push(card);
          }
          return prev;
        }, []);
        return { ...res, results };
      });
    if (!controller) {
      return promise;
    }
    return [promise, controller];
  };

  const getBySlug = (id) => request.get(`/cards/${id}`)
    .then((res) => res.json());

  const getStats = async ({ cardId, asCommander }) => {
    const { distribuition, ...stats } = await request
      .get(`/stats/${cardId}?as_commander=${asCommander}`)
      .then((res) => res.json());
    const formatedData = Object.entries(distribuition).map(([type, count]) => ({
      id: type,
      label: types[type] || type,
      value: Math.round(count / stats.decks.total),
    }));

    return {
      ...stats,
      distribuition: formatedData,
    };
  };

  return Object.freeze({
    search,
    getBySlug,
    getStats,
  });
};
