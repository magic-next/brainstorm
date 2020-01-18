require('dotenv').config();
const express = require('express');
const secure = require('express-force-https');
const next = require('next');
const Cookies = require('cookies');
const session = require('express-session');
const bodyParser = require('body-parser');
const { join } = require('path');
const routes = require('./routes');
const cookieState = require('./middlewares/cookie-state');
const { inject } = require('./middlewares/next');
const nextConfig = require('../next.config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ ...nextConfig, dev });
const port = process.env.PORT || 3000;

const sessionConfig = {
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {},
};

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    if (server.get('env') === 'production') {
      server.set('trust proxy', 1);
      sessionConfig.cookie.secure = true;
    }

    server
      .use(secure)
      .use(session(sessionConfig))
      .use(bodyParser.json())
      .use(Cookies.express())
      .use(cookieState())
      .use('/', express.static(join(__dirname, '..', 'public')))
      .use(inject(app));

    routes(server);

    server.get('/_next/*', handle);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
