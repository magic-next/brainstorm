import cookies from 'next-cookies';

class Cookie {
  constructor(ctx) {
    this.cookies = cookies(ctx);
  }

  get(name = null) {
    if (!name) {
      return this.cookies;
    }
    const res = this.cookies[encodeURIComponent(name)] || null;
    return JSON.stringify(res);
  }
}

export default Cookie;
