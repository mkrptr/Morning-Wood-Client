import { applyMiddleware, createStore, compose } from 'redux';

import { routerMiddleware } from 'connected-react-router';

import { createBrowserHistory as createHistory } from 'history';
import createRootReducer from './reducer';

export const history = createHistory();


const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
);

export default store;
