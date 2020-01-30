require('dotenv').config();
const withCSS = require('@zeit/next-css');

exports.default = withCSS({
  dir: './src',
});
