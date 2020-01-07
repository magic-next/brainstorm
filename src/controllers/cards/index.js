const { search } = require('../../services/server/cards');

const searchCard = async (req, res) => {
  try {
    const response = await search(req.query.q);
    res.send(response);
  } catch (error) {
    res.status(422).send({ error: true, message: error.message });
  }
};

module.exports = Object.freeze({
  searchCard,
});
