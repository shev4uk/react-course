import { post, get, put, deleteReq } from "../../api";
const API_URL = "https://624f22dfbdda77e9a9ba909c.mockapi.io/todos/";

export const ACTION_ADD_TODO = "ACTION_ADD_TODO";
export function addTodo(payload) {
  return function (dispatch) {
    post(API_URL, {
      title: payload.title,
      completed: false,
    }).then((date) => {
      dispatch({
        type: ACTION_ADD_TODO,
        payload: date,
      });
    });
  };
}

export const ACTION_DELETE_TODO = "ACTION_DELETE_TODO";
export function deleteTodo(payload) {
  return function (dispatch) {
    deleteReq(API_URL + payload).then((date) => {
      dispatch({
        type: ACTION_DELETE_TODO,
        payload: date.id,
      });
    });
  };
}

export const ACTION_UPDATE_TODO = "ACTION_UPDATE_TODO";
export function updateTodo(payload) {
  return function (dispatch) {
    put(API_URL + payload.id, {
      ...payload,
      completed: !payload.completed,
    }).then((date) => {
      dispatch({
        type: ACTION_UPDATE_TODO,
        payload: date,
      });
    });
  };
}

export const ACTION_FETCH_TODOS = "ACTION_FETCH_TODOS";
export function fetchTodos() {
  return function (dispatch) {
    get(API_URL).then((date) => {
      dispatch({
        type: ACTION_FETCH_TODOS,
        payload: date,
      });
    });
  };
}

// dispatch(action) -> (fn) | -> reducers -> (redux-logger) -> state updated
