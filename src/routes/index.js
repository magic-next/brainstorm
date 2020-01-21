const authController = require('../controllers/auth');
const cardsController = require('../controllers/cards');
const decksController = require('../controllers/decks');
const { byPass, requireAuth } = require('../middlewares/next');

const factory = (server) => {
  /**
   * NextJS Routes
   */
  server.get('/', byPass);
  server.get('/signin', byPass);
  server.get('/signup', byPass);

  server.get('/commanders/:filter?', (req) => {
    const actualPage = '/commanders';
    const queryParams = { filter: req.params.filter, ...req.query };
    req.render(actualPage, queryParams);
  });

  server.get('/card/:id', (req) => {
    const actualPage = '/card';
    const queryParams = { ...req.query, cardId: req.params.id };
    req.render(actualPage, queryParams);
  });

  server.get('/card/:id/average', (req) => {
    const actualPage = '/card';
    const queryParams = { average: true, cardId: req.params.id };
    req.render(actualPage, queryParams);
  });


  /**
   * Auth routes
   */
  server.post('/auth/login/:provider?', authController.login);
  server.post('/auth/resend', authController.resendMail);
  server.post('/auth/register', authController.registerAccount);
  server.get('/auth/confirm/:code', authController.confirmAccount);

  /**
   * Personal Routes
   */
  server.get('/me', requireAuth);

  /**
   * Decks Routes
   */
  server.post('/decks', decksController.myDecks);
  server.post('/decks/import', decksController.importDeck);
  server.get('/decks/create', requireAuth);

  /**
   * Search
   */
  server.get('/cards/search', cardsController.searchCard);
};

module.exports = factory;
