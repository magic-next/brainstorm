require('dotenv').config();
const { resolve } = require('path');
const withCSS = require('@zeit/next-css');

exports.default = withCSS({
  env: {
    API_URL: process.env.API_URL,
  },
  dir: './src',
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = resolve(__dirname, 'src');
    return config;
  },
});
