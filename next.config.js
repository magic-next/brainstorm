require('dotenv').config();
const withCSS = require('@zeit/next-css');

exports.default = withCSS({
  publicRuntimeConfig: {
    TUTOR_URL: 'https://tutor.magicnext.com.br',
  },
  env: {
    TUTOR_URL: 'https://tutor.magicnext.com.br',
    API_URL: process.env.API_URL,
  },
  dir: './src',
});
