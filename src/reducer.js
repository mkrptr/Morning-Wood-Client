import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './reducers/auth';
import home from './reducers/home';
import common from './reducers/common';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth,
    home,
    common,
})

export default createRootReducer;