import { createStore } from "Redux"

// select dom elements
const counterEl = document.getElementById('counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

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