import { createStore } from "Redux"

// initial state
const initialState = {
    value: 0,
}

// create reducer function
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1,
            }
        default:
            return state
    }
}

// create store
const store = createStore(counterReducer)