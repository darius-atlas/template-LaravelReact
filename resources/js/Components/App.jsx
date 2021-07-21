import React from "react"
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';

const el = document.getElementById('app');

const App = () => {
    return (<InertiaApp 
        initialPage={JSON.parse(el.dataset.page)} 
        resolveComponent={name => require(`./Pages/${name}`).default} 
    />);
}

export default App

if (el) {
    render(<App />, el);
}