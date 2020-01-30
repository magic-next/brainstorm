export const details = async ({ name, price = false }) => {
  const tutor = 'https://tutor.magicnext.com.br';
  const url = `${tutor}/cards?name=${name}&price=${price}`;
  const req = await fetch(url);
  return req.json();
};
