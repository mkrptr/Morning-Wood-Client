import { HOME_PAGE_LOADED, FETCH_LOTS } from '../action_types';

export const fetchLots = () => ({
    type: FETCH_LOTS,
});

const initialState = {
    lots: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
    case HOME_PAGE_LOADED:
        return {
            ...state,
        };
    case FETCH_LOTS:
        return {
            ...state,
            lots: [{ id: 1, name: 'wood' }],
        };
    default:
        return state;
    }
};
