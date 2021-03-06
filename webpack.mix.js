let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
mix.js('resources/assets/js/bundle.js', 'public/js')
   .js('resources/assets/js/map.js', 'public/js')
   .js('resources/assets/js/resumen.js', 'public/js')
   .js('resources/assets/js/sierra-azul.js', 'public/js')
   .js('resources/assets/js/sierra-azul-resumen.js', 'public/js')
   .js('resources/assets/js/carousel.js', 'public/js')
   .js('resources/assets/js/Chart.bundle.js', 'public/js')
   .js('resources/assets/js/owl.carousel.js', 'public/js')
   .js('resources/assets/js/fontawesome-all.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
