const axios = require('axios');

const { API_URL } = process.env;

const search = (text) => axios
  .get(`${API_URL}/cards/search`, { params: { q: text } })
  .then((res) => res.data);

module.exports = {
  search,
};
