const postcss = require('postcss');
const palette = require('./material-colors');
const contrast = require('./material-colors-contrast');

module.exports = postcss.plugin('postcss-google-color', opt => root => {
    opt = Object.assign({
        defaultLevel: 500,
        fallbackColor: '#ccc',
        palette: palette,
        contrast: contrast
    }, opt);
    root.walkDecls(decl => {
        if (decl.value.indexOf('google-color(') >= 0) {
            let regex = /google\-color\(([^\,\)]+)(\,([\s]+)?[^\)]+)?\)/ig;
            decl.value = decl.value.replace(
                regex,
                (string, color, level = null) => {
                    let colors = opt.palette;
                    color = color.replace(/[\s]+/ig, '').toLowerCase();
                    if (color === 'black' || color === 'white') {
                        return color
                    }
                    if (level) {
                        level = level.replace(/[\,\s]+/ig, '');
                    } else {
                        level = opt.defaultLevel;
                    }
                    if (color.indexOf('contrast') >= 0) {
                        color = color.replace('contrast', '');
                        colors = opt.contrast;
                    }
                    if (
                        colors.hasOwnProperty(color) &&
                        colors[color].hasOwnProperty(level)
                    ) {
                        color = colors[color][level];
                    } else {
                        color = opt.fallbackColor;
                    }
                    return color;
                }
            );
        }
    });
});
