import {
    LOGIN,
    REGISTER
} from '../action_types';

const initialState = {
    isAuthenticated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
    case LOGIN:
    case REGISTER:
        return {
            ...state,
            inProgress: false, 
            errors: []
        };
    default:
        return state;
    }
    return state;
};