const path = require('path');
const { CONFIG_FILENAME } = require('./constants');
const defaultConfig = require('./defaultConfig');

module.exports = (() => {
  let config;
  try {
    const t = path.join(process.cwd(), CONFIG_FILENAME);
    config = require(t);
  } catch (err) {
    console.error(err);
  }
  return Object.assign(defaultConfig, config);
})();
