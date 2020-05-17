/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './views/app/app';
console.log(process.env);
ReactDOM.render((
    <HashRouter>
        <App appName="Morning Wood" />
    </HashRouter>
),
// eslint-disable-next-line no-undef
document.getElementById('root'));
