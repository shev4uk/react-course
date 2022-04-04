const {createStore} = require('redux');

const ACTION_INCREMENT = 'ACTION_INCREMENT';
const ACTION_DECREMENT = 'ACTION_DECREMENT';
const ACTION_SET = 'ACTION_SET';
const initialState = {counts: 0, lastUpdate: null}

function increment() {
    return {type: ACTION_INCREMENT}
}
function decrement() {
    return {type: ACTION_DECREMENT}
}
function set(payload) {
    return {type: ACTION_SET, payload}
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_INCREMENT:
            return {...state, counts: state.counts + 1, lastUpdate: new Date()}
        case ACTION_DECREMENT:
            return {...state, counts: state.counts - 1, lastUpdate: new Date()}
        case ACTION_SET:
            return {...state, counts: payload, lastUpdate: new Date()}
        default:
            return state
    }
}

const store = createStore(rootReducer);

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
console.log(store.getState());
store.dispatch(set(5))
console.log(store.getState());