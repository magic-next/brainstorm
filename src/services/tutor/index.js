import 'isomorphic-fetch';

const tutor = process.env.TUTOR_URL;

export const details = async ({ name, price = false }) => {
  const url = `${tutor}/cards?name=${name}&price=${price}`;
  const req = await fetch(url);
  return req.json();
};
