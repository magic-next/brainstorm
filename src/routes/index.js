const authController = require('../controllers/auth');
const cardsController = require('../controllers/cards');
const decksController = require('../controllers/decks');
const { requireAuth } = require('../middlewares/next');

const factory = (server) => {
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
  server.get('/decks/:id', (req) => {
    const actualPage = '/deck';
    const queryParams = { ...req.query, deckId: req.params.id };
    req.render(actualPage, queryParams);
  });
  server.post('/decks/import', decksController.importDeck);
  server.get('/decks/create', requireAuth);

  /**
   * Search
   */
  server.get('/cards/search', cardsController.searchCard);
};

module.exports = factory;
