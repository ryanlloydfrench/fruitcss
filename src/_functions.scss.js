const sass = require('node-sass');
const fs = require('fs');

/*
const content = fs.readFileSync('index.html', 'utf8');
const selectors = content.match(/[a-z0-9-(.)]+/g);
*/

module.exports = {
  _f_class_list() {
    const arr = ['m(.1..3)', 'text(left...center)'];
    const list = new sass.types.List(arr.length);

    for (i = 0; i < arr.length; i++) {
      list.setValue(i, new sass.types.String(arr[i]));
    }

    return list;
  },

  _f_util($class_name) {
    const className = $class_name.getValue();
    const util = className.substring(0, className.indexOf('('));

    return new sass.types.String(util);
  },

  _f_exp($class_name) {
    const className = $class_name.getValue();
    const exp = className.slice(className.indexOf('(') + 1, -1);

    return new sass.types.String(exp);
  }
};
