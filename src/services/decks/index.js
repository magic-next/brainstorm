import 'isomorphic-fetch';

export const create = async (form) => {
  const body = JSON.stringify(form);
  const res = await fetch('/decks/import', {
    method: 'POST',
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const json = await res.json();
  if (res.status >= 400 || json.error) {
    throw new Error(json.message);
  }
  return json;
};

const api = process.env.API_URL;

export const myDecks = async ({ token }) => {
  const res = await fetch(`${api}/decks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  if (res.status >= 400 || json.error) {
    throw new Error(json.message);
  }
  return json;
};

export const getDeck = async ({ token, deckId }) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${api}/decks/${deckId}`, { headers });
  const json = await res.json();
  if (res.status >= 400 || json.error) {
    throw new Error(json.message);
  }
  return json;
};
