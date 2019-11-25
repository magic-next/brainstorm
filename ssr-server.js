require('dotenv').config();
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();

    server.get('/ranking/:filter', (req, res) => {
      const actualPage = '/ranking';
      const queryParams = { filter: req.params.filter };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/commander/:id', (req, res) => {
      const actualPage = '/commander';
      const queryParams = { cardId: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
