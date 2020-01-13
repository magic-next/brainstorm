import 'isomorphic-fetch';

export const create = async (user) => {
  const body = JSON.stringify(user);
  const res = await fetch('/auth/register', {
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
  const body = JSON.stringify({ email, password });
  const res = await fetch('/auth/login', {
    method: 'POST',
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const json = res.json();
  if (res.status >= 400 || json.error) {
    throw new Error(json.message);
  }
  return json;
};

export const resend = async () => {
  const res = await fetch('auth/resend', {
    method: 'POST',
    credentials: 'include',
  });
  const json = res.json();
  if (res.status >= 400 || json.error) {
    const err = new Error(json.message);
    err.status = res.status;
    throw err;
  }
  return json;
};
