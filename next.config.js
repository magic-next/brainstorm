require('dotenv').config();

exports.default = {
  env: {
    API_URL: process.env.API_URL,
  },
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = __dirname;
    return config;
  },
};
