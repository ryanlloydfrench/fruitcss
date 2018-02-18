const chalk = require('chalk');
const path = require('path');
const { CONFIG_FILENAME, WARN_CONFIG_NOT_FOUND } = require('./constants');
const defaultConfig = require('./defaultConfig');

module.exports = (() => {
  let config;
  try {
    const t = path.resolve(process.cwd(), CONFIG_FILENAME);
    config = require(t);
  } catch (e) {
    console.warn(chalk.yellow(WARN_CONFIG_NOT_FOUND));
  }
  return Object.assign(defaultConfig, config);
})();
