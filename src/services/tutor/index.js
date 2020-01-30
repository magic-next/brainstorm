import 'isomorphic-fetch';

const { TUTOR_URL } = process.env;

export const details = async ({ name, price = false }) => {
  const url = `${TUTOR_URL}/cards?name=${name}&price=${price}`;
  const req = await fetch(url);
  return req.json();
};
