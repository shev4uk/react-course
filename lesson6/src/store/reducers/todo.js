import {
  ACTION_ADD_TODO,
  ACTION_DELETE_TODO,
  ACTION_UPDATE_TODO,
  ACTION_FETCH_TODOS
} from "../actions/todo";

const initialState = {
  todos: [{ id: 1, title: "delectus aut autem", completed: false }],
};
export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_FETCH_TODOS:
        return {...state, todos: payload}
    case ACTION_ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          payload,
        ],
      };
    case ACTION_DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
      };
    case ACTION_UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => (item.id !== payload.id ? item : {...payload, completed: !payload.completed})),
      };
    default:
      return state;
  }
}
