const {
  signin,
  resend,
  confirm,
  register,
} = require('../../services/server/users');

const login = async (req, res) => {
  try {
    const provider = req.params.provider || '';
    const { token, user } = await signin({
      provider,
      body: req.body,
    });
    req.session.token = token;
    req.session.user = user;
    res.status(200).send({ user });
  } catch (error) {
    res.status(401).send({ error: true, message: error.message });
  }
};

const registerAccount = async (req, res) => {
  try {
    const { user, token } = await register(req.body);
    req.session.token = token;
    req.session.user = user;
    res.status(200).send({ user });
  } catch (error) {
    res.status(401).send({ error: true });
  }
};

const confirmAccount = async (req, res) => {
  try {
    const { token, user } = await confirm(req.params.code);
    req.session.token = token;
    req.session.user = user;
    res.redirect('/commanders');
  } catch (error) {
    res.status(422).send({ error: true });
  }
};

const resendMail = async (req, res) => {
  try {
    const { token } = req.session;
    await resend(token);
    res.send({ error: false });
  } catch (error) {
    res.status(error.response.status).send({ error: true, message: error.message });
  }
};

module.exports = Object.freeze({
  login,
  registerAccount,
  resendMail,
  confirmAccount,
});
