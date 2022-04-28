import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/todo'

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;