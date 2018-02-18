# 🍉 fruitcss

Easy to digest, **responsive** utility classes.

## Why?

This sucks:

```html
<h1 class="d-inline-block mb-0 mb-sm-1 mb-lg-3 text-center text-lg-left text-xl-right">Hard to read; bloated</h1>
```

This **doesn't** suck so much:

```html
<h1 class="d(inline-block) mb(0.1..3) text(center...left.right)">Ahhhh!! Much better 😎</h1>
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

By default fruitcss will troll through your entire project's HTML for utility classes. You may want to configure this to search the contents of only certain directories and/or filetypes.

You can do this by adding a config file in your project's root directory.

```js
// fruitcss.config.js
module.exports = {
  markup: ['templates/**/*.twig'] // Accepts an array of glob files
}
```
