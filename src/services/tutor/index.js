import getConfig from 'next/config';
import 'isomorphic-fetch';

export const details = async ({ name, price = false }) => {
  const { publicRuntimeConfig } = getConfig();
  const { TUTOR_URL } = publicRuntimeConfig;
  console.log(JSON.stringify(publicRuntimeConfig, null, 2), TUTOR_URL);
  const url = `${TUTOR_URL}/cards?name=${name}&price=${price}`;
  const req = await fetch(url);
  return req.json();
};
