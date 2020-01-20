const axios = require('axios');

const { API_URL } = process.env;

const importDeck = (deck) => axios
  .post(`${API_URL}/decks/import`, deck)
  .then((res) => res.data);

module.exports = {
  importDeck,
};
