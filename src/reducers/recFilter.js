import {actionTypes, FILTERS} from '../actions'


export const recFilter = (state = FILTERS.SHOW_ALL, action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.payload
        default:
            return state
    }
}
