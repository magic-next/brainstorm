const { importDeck: importer, getMyDecks } = require('../../services/server/decks');

const importDeck = async (req, res) => {
  if (!req.session.user) {
    res.status(401).send({
      error: true,
      message: 'Unathorized',
    });
    return;
  }
  try {
    const response = await importer(req.body);
    res.send(response);
  } catch (error) {
    res.status(422).send({ error: true, message: error.message });
  }
};

const myDecks = async (req, res) => {
  if (!req.session.token) {
    res.status(401).send({
      error: true,
      message: 'Unathorized',
    });
    return;
  }
  try {
    const response = await getMyDecks({ token: req.session.token });
    res.send(response);
  } catch (error) {
    res.status(422).send({ error: true, message: error.message });
  }
};

module.exports = Object.freeze({
  importDeck,
  myDecks,
});
