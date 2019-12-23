require('dotenv').config();
const express = require('express');
const secure = require('express-force-https');
const next = require('next');
const Cookies = require('cookies');
const cookieState = require('./middlewares/cookie-state');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();
    server.use(secure);
    server.use(Cookies.express());
    server.use(cookieState());

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
      const queryParams = { cardId: req.params.id };
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
