# PostCSS Google Color [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-google-color.svg)](https://www.npmjs.com/package/postcss-google-color)
[![Build Status](https://travis-ci.org/arpadHegedus/postcss-google-color.svg?branch=master)](https://travis-ci.org/arpadHegedus/postcss-google-color)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) for easily invoking the colors on the [Google Material design color palette](https://material.io/guidelines/style/color.html#color-color-palette)


## Installation

```
npm install postcss-google-color
```

## Examples

### Simple use
```css
/* input */
div { color: google-color(teal) }
```
```css
/* output */
div { color: #009688 } /* this is shade level 500 (default) */
```

### Select shade level
```css
/* input */
div { color: google-color(teal, 800) }
```
```css
/* output */
div { color: #00695c }
```

### Get contrasting text color
```css
/* input */
div { background: google-color(red); color: google-color(contrast red) }
```
```css
/* output */
div { background: #f44336; color: #ffffff }
```

## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-google-color')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const gc = require('postcss-google-color');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            gc()
        ]))
        .pipe(gulp.dest('path/to/build/css'));
});
```

## Tests

```
npm test
```

## License
This project is licensed under the [MIT License](./LICENSE).
