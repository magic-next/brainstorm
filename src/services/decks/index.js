import 'isomorphic-fetch';

export const create = async (form) => {
  const body = JSON.stringify(form);
  const res = await fetch('/decks', {
    method: 'POST',
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const json = res.json();
  if (res.status >= 400 || json.error) {
    throw new Error(json.message);
  }
  return json;
};
