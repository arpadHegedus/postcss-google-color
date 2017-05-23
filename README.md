A [PostCSS] plugin for easily invoking the colors on the [Google Material design color palette].

[PostCSS]: https://github.com/postcss/postcss
[Gulp]: https://github.com/gulpjs/gulp
[Google Material design color palette]: https://material.io/guidelines/style/color.html

## Installation

```js
npm install postcss-google-color
```

## Example

```css
body {
    color: google-color(teal, 800);
}
```

will produce

```css
body {
    color: #00695c
}
```

## Usage

Using [Gulp].

```js
var gulp        = require('gulp'),
    postcss     = require('gulp-postcss'),
    googleColor = require('postcss-google-color');

gulp.task('css', function() {
    gulp.src('path/to/dev-css').
        .pipe(postcss({
            googleColor
        }))
        .pipe(gulp.dest('path/to/build/css'));
});

// rest of the gulp file
```

