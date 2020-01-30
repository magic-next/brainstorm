import 'isomorphic-fetch';

export const details = async ({ name, price = false }) => {
  const { TUTOR_URL } = process.env;
  const url = `${TUTOR_URL}/cards?name=${name}&price=${price}`;
  const req = await fetch(url);
  return req.json();
};
