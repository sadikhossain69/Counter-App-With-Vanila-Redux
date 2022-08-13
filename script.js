// import { createStore } from "Redux"

// select dom elements
const counterEl = document.getElementById('counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

// const variable
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// dispatch action
const incrementAction = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}
const decrementAction = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
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
                value: state.value + action.payload,
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - action.payload,
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
    store.dispatch(incrementAction(10))
    // render()
})

decrementEl.addEventListener('click', () => {
    store.dispatch(decrementAction(5))
    // render()
})