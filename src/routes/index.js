const authController = require('../controllers/auth');
const cardsController = require('../controllers/cards');

const factory = (server) => {
  /**
   * Auth routes
   */
  server.post('/auth/login', authController.login);
  server.post('/auth/resend', authController.resendMail);
  server.get('/auth/confirm/:code', authController.confirmAccount);

  /**
   * Search
   */
  server.get('/cards/search', cardsController.searchCard);
};

module.exports = factory;
