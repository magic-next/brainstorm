require('dotenv').config();
const { resolve } = require('path');

exports.default = {
  env: {
    API_URL: process.env.API_URL,
  },
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = resolve(__dirname, 'src');
    return config;
  },
};
