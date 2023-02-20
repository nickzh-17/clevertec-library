import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { bookReducer } from './book-reducer';
import { mainReducer } from './main-reducer';

const rootReducer = combineReducers({
    mainReducer,
    bookReducer,
});


export const store = createStore(rootReducer, composeWithDevTools() );