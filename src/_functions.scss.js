/**
 * TODO: extract HTML classes
 */

const sass = require('node-sass');
const fs = require('fs');

/*
const content = fs.readFileSync('index.html', 'utf8');
const selectors = content.match(/[a-z0-9-(.)]+/g);
*/

module.exports = {

  /**
   * Compile a list of classes from our HTML templates
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
   * Provide JS's `split` method to SCSS files as a function
   *
   * Splits a string into a `SassList`.
   *
   * @param  {SassString} $string
   * @param  {SassString} $separator
   * @return {SassList}
   */
  _f_split($string, $separator) {
    const list = $string.getValue().split($separator.getValue());
    const $list = new sass.types.List(list.length);

    for (i = 0; i < list.length; i++) {
      $list.setValue(i, new sass.types.String(list[i]));
    }
    return $list;
  },

  /**
   * Provide JS's `join` method ...
   *
   * Joins all list items into a string.
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
    return new sass.types.String(list.join($separator.getValue()));
  },
};
