import 'isomorphic-fetch';

export const create = (user) => {
  const { API_URL } = process.env;
  const body = JSON.stringify(user);
  return fetch(`${API_URL}/auth/register`, { method: 'POST', body })
    .then((res) => res.json());
};
