const fs = require('fs');
const glob = require('glob');
const extract = require('./extract');

module.exports = (files) => {
  let utils = new Set();

  for (const file of files) {
    let filenames = [];

    if (fs.existsSync(file)) {
      filenames.push(file);
    } else {
      filenames = glob.sync(file);
    }

    for (const filename of filenames) {
      const markup = fs.readFileSync(filename, 'utf8');
      utils = new Set([...utils, ...extract(markup)]);
    }
  }
  return [...utils];
};
