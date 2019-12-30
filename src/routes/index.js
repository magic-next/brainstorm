const authController = require('../controllers/auth');

const factory = (server) => {
  server.post('/auth/login', authController.login);
  server.post('/auth/resend', authController.resendMail);
  server.get('/auth/confirm/:code', authController.confirmAccount);
};

module.exports = factory;
