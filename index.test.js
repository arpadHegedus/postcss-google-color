const plugin = require('./');
const postcss = require('postcss');
function testCode(code, expected, options = {}, plugins = []) {
    return () => {
        if (plugins.length === 0) plugins.push(plugin(options));
        return postcss(plugins)
            .process(code, { from: undefined })
            .then(result => {
                expect(result.css.replace(/[\n]/ig, '')).toEqual(expected);
            });
    };
}

it('can parse simple google-color', testCode(
    'div { color: google-color(teal) }',
    'div { color: #009688 }'
));
it('can use similar name variations', testCode(
    'div { color: google-color(Teal); background: google-color(Deep Purple) }',
    'div { color: #009688; background: #673ab7 }'
));
it('can parse multiple google-color', testCode(
    'div { border-color: google-color(teal) google-color(red) }',
    'div { border-color: #009688 #f44336 }'
));
it('can use levels', testCode(
    'div { color: google-color(red, 200) }',
    'div { color: #ef9a9a }'
));
it('can use contrast colors', testCode(
    'div { color: google-color(contrast red) }',
    'div { color: #ffffff }'
));
it('can use level and contrast together', testCode(
    'div { color: google-color(contrast red, 200) }',
    'div { color: #000000 }'
));
it('can use wrong values with fallback', testCode(
    'div { color: google-color(punk) }',
    'div { color: #ccc }'
));
it('can use updated options', testCode(
    'div { color: google-color(teal) }',
    'div { color: #00897b }',
    {
        defaultLevel: 600
    }
));
