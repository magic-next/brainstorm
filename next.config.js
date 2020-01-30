require('dotenv').config();
const withCSS = require('@zeit/next-css');

exports.default = withCSS({
  env: {
    TUTOR_URL: process.env.TUTOR_URL,
    API_URL: process.env.API_URL,
  },
  dir: './src',
});
