import { combineReducers } from 'redux';
import { countsReducer } from './counts';
import { itemsReducer } from './items';

const rootReducer = combineReducers({
    counts: countsReducer,
    items: itemsReducer,
});
export default rootReducer;
