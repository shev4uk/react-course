import {
  ACTION_INCREMENT,
  ACTION_DECREMENT,
  ACTION_SET,
} from "../actions/counter";

const initialState = {
  counts: 10,
};

export function countsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_INCREMENT:
      return { ...state, counts: state.counts + 1, lastUpdate: new Date() };
    case ACTION_DECREMENT:
      return { ...state, counts: state.counts - 1, lastUpdate: new Date() };
    case ACTION_SET:
      return { ...state, counts: payload, lastUpdate: new Date() };
    default:
      return state;
  }
}
