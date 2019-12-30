const axios = require('axios');

const { API_URL } = process.env;

const signin = (body) => axios
  .post(`${API_URL}/auth/login`, body)
  .then((res) => res.data);

const confirm = (code) => axios
  .post(`${API_URL}/auth/confirm/${code}`)
  .then((res) => res.data);

const resend = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${API_URL}/auth/resend`, {}, config)
    .then((res) => res.data);
};

module.exports = {
  signin,
  resend,
  confirm,
};
