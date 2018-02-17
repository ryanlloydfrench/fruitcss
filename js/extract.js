module.exports = (markup) => {
  const matches = markup.match(/class="[\w\d\s\-\(\.\)]+"/g) || [];
  let utils = new Set();

  for (const match of matches) {
    utils = new Set([
      ...utils,
      ...match
        .slice(7, -1)
        .split(' ')
        .filter(Boolean)
    ]);
  }
  return utils;
};
