// Action Types
export const actionTypes = {

    ADD_TODO : "ADD_TODO",
    TOGGLE_TODO : "TOGGLE_TODO",
    SET_VISIBILITY_FILTER : "SET_VISIBILITY_FILTER"
}

// Filters

export const FILTERS = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}

// ID for each todo

let id = 0;

// 3 action creators:


export const acAdd = todo => ({type: actionTypes.ADD_TODO , payload: {text: todo, id: id++ }})

export const acToggle = id => ({type: actionTypes.TOGGLE_TODO , payload: id})

export const acFilter = filter => ({type: actionTypes.SET_VISIBILITY_FILTER , payload: filter})


