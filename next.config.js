require('dotenv').config();
const withCSS = require('@zeit/next-css');

exports.default = withCSS({
  env: {
    API_URL: process.env.API_URL,
  },
  dir: './src',
});
