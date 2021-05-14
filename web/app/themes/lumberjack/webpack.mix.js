const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const tailwindconfig = require('./tailwind.config.js');

mix.js('assets/js/app.js', 'dist/')
    .sass('assets/css/app.scss', 'dist/')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss(tailwindconfig) ],
    })


// Source maps when not in production.
if (! mix.inProduction()) {
    mix.sourceMaps(false, 'source-map')
}
