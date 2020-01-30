import getConfig from 'next/config';

export const details = async ({ name, price = false }) => {
  const { TUTOR_URL } = process.env;
  console.log(JSON.stringify(process.env, null, 2), process.env.tutor, 'INFERNO');
  const url = `${TUTOR_URL}/cards?name=${name}&price=${price}`;
  const req = await fetch(url);
  return req.json();
};
