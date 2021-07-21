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
16. resources/js/Components/Pages/Welcom.jsx<br>
`
import React from 'react';<br>
import { Link } from '@inertiajs/inertia-react';<br><br>
const Welcome = ({canLogin, user, laravelVersion, phpVersion}) => {<br>
    return (<div<br>
        className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"><br>
        {canLogin &&<br>
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block"><br>
            {user && <Link href={route('dashboard')}<br>
                           className="text-sm text-gray-700 underline"><br>
                Dashboard<br>
            </Link>}<br><br>
            {!user && (<><br>
                <Link href={route('login')}<br>
                      className="text-sm text-gray-700 underline"><br>
                    Log in<br>
                </Link><br>
                <Link href={route('register')}<br>
                      className="ml-4 text-sm text-gray-700 underline"><br>
                    Register<br>
                </Link><br>
            </>)}<br>
        </div>}<br><br>
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8"><br>
            <div<br>
                className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0"><br>
                Laravel v{laravelVersion} (PHP v{phpVersion})<br>
            </div><br>
        </div><br>
    </div>);<br>
};<br><br>
export default Welcome;
`
17. 

# Install template