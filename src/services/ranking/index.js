import 'isomorphic-fetch';
import moment from 'moment';

const api = process.env.API_URL;

export const commander = async ({ cardId, isCommander, maxResults = 200 }) => {
  const time = Date.now();
  const res = await fetch(`${api}/related/${cardId}?as_commander=${isCommander}&max_results=${maxResults}`)
  const data = await res.json();
  const sec = (Date.now() - time) / 1000;
  console.log(`Related API fetched in: ${sec}s`);
  const categories = {
    top: [],
  };
  data.forEach((item) => {
    const primaryType = item.card.types[0] || '';
    const key = primaryType.toLowerCase();
    if (key !== 'land' && categories.top.length < 20) {
      categories.top.push(item);
      return;
    }
    if (!categories[key]) {
      categories[key] = [];
    }
    categories[key].push(item);
  });
  return categories;
};

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
    after.set('date', 1).subtract(1, 'month');
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
