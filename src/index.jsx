import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import './index.css';
import authStore from './stores/auth_store';
import App from './views/app/app';

const stores = {
    authStore,
};

ReactDOM.render((
    <Provider authStore={authStore}>
        <HashRouter>
            <App appName="Morning Wood" />
        </HashRouter>
    </Provider>
),
// eslint-disable-next-line no-undef
document.getElementById('root'));
