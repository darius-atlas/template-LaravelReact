import React from "react"
import { render } from 'react-dom';

const el = document.getElementById('app');

const App = () => {
    return (<div>Laravel Jetstream with React</div>);
}

export default App

if (el) {
    render(<App />, el);
}