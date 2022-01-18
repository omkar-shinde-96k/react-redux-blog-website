import { combineReducers } from 'redux';

import PostReducer from './PostReducer.js';
import CategoryData from './CategoryReducer.js';

const rootReducer = combineReducers({
    CategoryData,
    PostReducer,
})

export default rootReducer;