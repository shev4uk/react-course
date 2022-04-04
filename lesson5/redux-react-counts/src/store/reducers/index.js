import {
    ACTION_INCREMENT,
    ACTION_DECREMENT,
    ACTION_SET,
} from '../actions/counter'

import {
    ACTION_ITEMS_ADD,
    ACTION_ITEMS_REMOVE_LAST
} from '../actions/items'

const initialState = {
    counts: 10,
    items: []
}
export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_INCREMENT:
            return {...state, counts: state.counts + 1, lastUpdate: new Date()}
        case ACTION_DECREMENT:
            return {...state, counts: state.counts - 1, lastUpdate: new Date()}
        case ACTION_SET:
            return {...state, counts: payload, lastUpdate: new Date()}
        case ACTION_ITEMS_ADD:
            return {...state, items: [...state.items, payload]}
        default:
            return state
    }
}
