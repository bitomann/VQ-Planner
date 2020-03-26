import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import VqPlanner from './components/vqPlanner/VqPlanner';
import '../src/fonts/capture-it.ttf'
// import * as serviceWorker from './serviceWorker';



// React 'Router' is a standard library for routing in React. It enables the navigation 
// among views of various components in a React Application, allows changing the browser 
// URL and keeps the UI in sync with the URL.
ReactDOM.render(
    <Router>
        <VqPlanner />;
    </Router>,
    document.getElementById('root')
    );
