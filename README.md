# 🍉 fruitcss

Easy to digest, **responsive** utility classes.

## What is fruitcss?

Currently, it's a work in progress … what we want it to do though, is turn this:

```html
<!-- Hard to read; bloated -->
<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" />
```

Into this:

```html
<!-- Ahhhh!! Much better! -->
<div class="col(12.6.4.3.2)" />
```

## Quick start

Install fruitcss as a dev dependency.

```
npm i -D fruitcss
```

Supply fruitcss functions to your SCSS files with the [node-sass CLI](https://github.com/sass/node-sass#command-line-interface) functions flag.

```
node-sass --functions node_modules/fruitcss/js/functions <input> [output]
```

Import fruitcss at the top of your main SCSS file.

```scss
@import "node_modules/fruitcss/scss/fruitcss";
```

**Note:** Utilities won't compile _unless and until_ added to your markup 👍

## Configuration

By default, fruitcss will troll through your entire project's HTML for utility classes. You may want to configure this to search the contents of only certain directories and/or filetypes.

You can do this by adding a config file in your project's root directory.

```js
// fruitcss.config.js
module.exports = {
  markup: ['templates/**/*.twig'] // Accepts an array of glob files
}
```
