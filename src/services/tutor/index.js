import { init } from '../../libs/request';

export default ({ tutorUrl }) => {
  const request = init({ baseUrl: tutorUrl });

  const details = async ({ name, price = false }) => {
    const url = `/cards?name=${name}&price=${price}`;
    const req = await request.get(url);
    return req.json();
  };

  return Object.freeze({ details });
};
