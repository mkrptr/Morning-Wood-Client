import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import store, { history } from './store';
import App from './App';

console.log(store);
console.log(history);
console.log(App);
console.log(ConnectedRouter);
console.log(Provider);

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
    ), 
    document.getElementById('root'));

