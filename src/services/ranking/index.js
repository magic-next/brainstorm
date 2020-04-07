import 'isomorphic-fetch';
import moment from 'moment';

const api = process.env.API_URL;

export const commander = ({ cardId, isCommander, maxResults = 20 }) => (
  fetch(`${api}/ranking/${cardId}?commander=${isCommander}&maxResults=${maxResults}`)
    .then((res) => res.json())
);

export const average = async ({ card }) => {
  const deck = await fetch(`${api}/ranking/${card.id}/average`)
    .then((res) => res.json());
  return {
    cards: [
      { ...card, count: 1, extra: 'commander' },
      ...deck,
    ],
  };
};

const getInterval = ({ filter = 'years'}) => {
  const after = moment.utc(moment().format('YYYY-MM-DD'));
  if (filter === 'month') {
    after.set('date', 1);
    return { after: after.toISOString(), before: after.add(1, 'months').toISOString() };
  }
  if (filter === 'week') {
    after.subtract(7, 'days').set('day', 0);
    return { after: after.toISOString(), before: after.add(7, 'days').toISOString() };
  }
  after.subtract(1, 'year').set({ date: 1, month: 0 });
  if (filter === 'year') {
    return { after: after.toISOString(), before: after.add(1, 'year').toISOString() };
  }
  return { after: after.toISOString() }
};

export const list = ({ filter, page = 1, colors }) => {
  const params = { ...getInterval({ filter }), page };
  if (colors) {
    params.colors = colors;
  }
  const qs = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return fetch(`${api}/ranking?${qs}`)
    .then((res) => res.json());
};
