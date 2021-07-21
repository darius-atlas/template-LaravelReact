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
10. resources/js/Components/App.jsx<br>
`
import React from "react"<br>
import { render } from 'react-dom';<br><br>
import { InertiaApp } from '@inertiajs/inertia-react';<br>
const el = document.getElementById('app');<br><br>
const App = () => {<br>
    return (<InertiaApp<br>
        initialPage={JSON.parse(el.dataset.page)}<br>
        resolveComponent={name => require(`./Pages/${name}`).default}<br>
    />);<br>
}<br><br>
export default App<br><br>
if (el) {<br>
    render(<App />, el);<br>
}<br>
`<br>
11. resources/js/app.js<br>
`
import './bootstrap'<br>
import { InertiaProgress } from '@inertiajs/progress';<br>
import './Components/App';<br><br>
InertiaProgress.init();<br>
`<br>
12. `composer require inertiajs/inertia-laravel`<br>
13. `php artisan inertia:middleware`<br>
14. Create folder `resources/js/Components/Pages`<br>
15. `npm run watch`<br>
16. 

# Install template