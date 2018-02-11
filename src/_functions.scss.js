const sass = require('node-sass');
const fs = require('fs');

/*
const content = fs.readFileSync('index.html', 'utf8');
const selectors = content.match(/[a-z0-9-(.)]+/g);
*/

module.exports = {
  class_list() {
    const arr = ['m(.1..3)', 'text(left...center)'];
    const list = new sass.types.List(arr.length);

    for (i = 0; i < arr.length; i++) {
      list.setValue(i, new sass.types.String(arr[i]));
    }

    return list;
  }
};
