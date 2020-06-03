import { init } from '../../libs/request';

export default ({ tutorUrl }) => {
  const request = init({ baseUrl: tutorUrl });

  const details = async ({ name, price = false, provider = 'ligamagic' }) => {
    const url = `/cards?name=${name}&price=${price}&provider=${provider}&oversize=0`;
    const req = await request.get(url);
    return req.json();
  };

  return Object.freeze({ details });
};
