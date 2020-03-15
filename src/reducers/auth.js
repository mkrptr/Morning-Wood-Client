import {
    LOGIN,
    REGISTER,
} from '../action_types';
import ApiService from '../services/api.service';


export default (state, action) => {
    switch (action.type) {
    case LOGIN:
        break;
    case REGISTER:
        return {
            ...state,
            inProgress: false,
            errors: [],
        };
    default:
        return state;
    }
    return state;
};
