const authController = require('../controllers/auth');

const factory = (server) => {
  server.post('/auth/login', authController.login);
  server.post('/auth/resend', authController.resendMail);
};

module.exports = factory;
