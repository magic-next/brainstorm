require('dotenv').config();
const withCSS = require('@zeit/next-css');

exports.default = withCSS({
  publicRuntimeConfig: {
    TUTOR_URL: process.env.TUTOR_URL,
  },
  env: {
    API_URL: process.env.API_URL,
  },
  dir: './src',
});
