require('dotenv').config();
const express = require('express');
const secure = require('express-force-https');
const next = require('next');
const Cookies = require('cookies');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cookieState = require('./middlewares/cookie-state');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const sessionConfig = {
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {},
};

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
      .use(cookieState());


    routes(server);

    server.get('/commanders/:filter', (req, res) => {
      const actualPage = '/commanders';
      const queryParams = {
        filter: req.params.filter,
        ...req.query,
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/card/:id', (req, res) => {
      const actualPage = '/card';
      const queryParams = { ...req.query, cardId: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/card/:id/average', (req, res) => {
      const actualPage = '/card';
      const queryParams = { average: true, cardId: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
