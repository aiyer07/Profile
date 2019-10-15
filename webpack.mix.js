let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/')
.sass('src/app.scss', 'dist/');

mix.browserSync('my-domain.dev');