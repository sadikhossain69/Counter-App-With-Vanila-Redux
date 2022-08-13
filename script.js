// import { createStore } from "Redux"

// select dom elements
const counterEl = document.getElementById('counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

// const variable
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// dispatch action
const incrementAction = {
    type: INCREMENT,
}
const decrementAction = {
    type: DECREMENT,
}

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
const store = Redux.createStore(counterReducer)

const render = () => {
    const state = store.getState()
    counterEl.innerHTML = state.value.toString()
}

render()

store.subscribe(render)

// button click listeners
incrementEl.addEventListener('click', () => {
    store.dispatch(incrementAction)
    // render()
} )

decrementEl.addEventListener('click', () => {
    store.dispatch(decrementAction)
    // render()
} )