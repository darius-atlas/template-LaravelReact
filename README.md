# Recreate
1. `composer create-project laravel/laravel templateLaravelReact`<br>
2. `cd templateLaravelReact`<br>
3. `composer require laravel/jetstream`<br>
4. `php artisan jetstream:install inertia --teams`<br>
5. `npm install`<br>
6. `npm run dev`<br>
7. `npm remove @inertiajs/inertia-vue3 vue`<br>
8. `npm install react react-dom @inertiajs/inertia-react --dev`<br>
9. webpack.mix.js<br>
`const mix = require('laravel-mix');<br>
mix.js('resources/js/app.js', 'public/js').react();<br>
mix.postCss('resources/css/app.css', 'public/css', [<br>
    require('postcss-import'),<br>
    require('tailwindcss'),<br>
])<br>
.webpackConfig(require('./webpack.config'));<br>
<br>
if (mix.inProduction()) {<br>
    mix.version();<br>
}<br>
`<br>
10. 

# Install template