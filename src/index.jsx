/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import './index.css';
import authStore from './stores/auth_store';
import userStore from './stores/user_store';
import App from './views/app/app';

const stores = {
    authStore,
    userStore,
};

ReactDOM.render((
    <Provider {...stores}>
        <HashRouter>
            <App appName="Morning Wood" />
        </HashRouter>
    </Provider>
),
// eslint-disable-next-line no-undef
document.getElementById('root'));
