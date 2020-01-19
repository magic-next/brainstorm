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

export const auth = async ({ provider = '', ...bodyData }) => {
  const body = JSON.stringify(bodyData);
  const res = await fetch(`/auth/login/${provider}`, {
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

const facebookLogin = async () => {
  const promise = new Promise((res) => {
    window.FB.login(res, { scope: 'public_profile,email' });
  });
  const { authResponse = null, status } = await promise;
  if (status !== 'connected') {
    throw new Error('Erro ao conectar-se com o Facebook');
  }
  const { accessToken, userID: userId } = authResponse;
  return auth({ provider: 'facebook', accessToken, userId });
};

export const socialAuth = {
  facebook: facebookLogin,
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
