const sass = require('node-sass');
const { markup } = require('./defaultConfig');
const extractUtils = require('./extractUtils');

module.exports = {

  /**
   * Compile a list of classes from our HTML templates
   *
   * @return {SassList}
   */
  _f_class_list() {
    const utils = extractUtils(markup);
    const $classList = new sass.types.List(utils.length);

    for (i = 0; i < utils.length; i++) {
      $classList.setValue(i, new sass.types.String(utils[i]));
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
