const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('assets/js/app.js', 'dist/')
    .sass('assets/css/app.scss', 'dist/')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('tailwind.config.js') ],
    })


// Source maps when not in production.
if (! mix.inProduction()) {
    mix.sourceMaps(false, 'source-map')
}
