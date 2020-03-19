import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import VqPlanner from './components/vqPlanner/VqPlanner';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <VqPlanner />;
    </Router>,
    document.getElementById('root')
    );
