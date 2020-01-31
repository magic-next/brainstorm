import 'isomorphic-fetch';

class Request {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  get(uri, options) {
    const url = `${this.baseUrl}${uri}`;
    return fetch(url, options);
  }
}

export const init = ({ baseUrl }) => (
  new Request({ baseUrl })
);
