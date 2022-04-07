import { ACTION_ITEMS_ADD, ACTION_ITEMS_REMOVE_LAST } from "../actions/items";

const initialState = {
  items: [],
};
export function itemsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_ITEMS_ADD:
      return { ...state, items: [...state.items, payload] };
    default:
      return state;
  }
}
