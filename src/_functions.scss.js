const sass = require('node-sass');
const fs = require('fs');

/*
const content = fs.readFileSync('index.html', 'utf8');
const selectors = content.match(/[a-z0-9-(.)]+/g);
*/

module.exports = {

  /**
   * Class list
   *
   * @return {SassList}
   */
  _f_class_list() {
    const arr = [...new Set(['m(.1..3)', 'text(left...center)'])];
    const $classList = new sass.types.List(arr.length);

    for (i = 0; i < arr.length; i++) {
      $classList.setValue(i, new sass.types.String(arr[i]));
    }
    return $classList;
  },

  /**
   * Util
   *
   * @param  {SassString} $className [description]
   * @return {SassString}
   */
  _f_util($className) {
    const className = $className.getValue();
    const util = className.substring(0, className.indexOf('('));

    return new sass.types.String(util);
  },

  /**
   * Exp list
   *
   * @param  {SassString} $className [description]
   * @return {SassList}
   */
  _f_exp_list($className) {
    const className = $className.getValue();
    const expList = className.slice(className.indexOf('(') + 1, -1).split('.');
    const $expList = new sass.types.List(expList.length);

    for (i = 0; i < expList.length; i++) {
      $expList.setValue(i, new sass.types.String(expList[i]));
    }
    return $expList;
  }
};
