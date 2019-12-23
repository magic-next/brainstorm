import 'isomorphic-fetch';

export const create = async (user) => {
  const { API_URL } = process.env;
  const body = JSON.stringify(user);
  const res = await fetch(`${API_URL}/auth/register`, {
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

export const auth = async ({ email, password }) => {
  const { API_URL } = process.env;
  const body = JSON.stringify({ email, password });
  const res = await fetch(`${API_URL}/auth/login`, {
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
