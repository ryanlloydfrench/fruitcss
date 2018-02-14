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
   * Split
   *
   * @param  {SassString} $exp [description]
   * @return {SassList}
   */
  _f_split($string, $separator) {
    const expList = $exp.getValue().split('.');
    const $expList = new sass.types.List(expList.length);

    for (i = 0; i < expList.length; i++) {
      $expList.setValue(i, new sass.types.String(expList[i]));
    }
    return $expList;
  },

  /**
   * Join all list items into a string
   *
   * @param  {SassList}   $list
   * @param  {SassString} $separator
   * @return {SassString}
   */
  _f_join($list, $separator) {
    const list = [];

    for (i = 0; i < $list.getLength(); i++) {
      list[i] = $list.getValue(i).getValue();
    }
    return new sass.types.String(list.join('\\.'));
  },
};
