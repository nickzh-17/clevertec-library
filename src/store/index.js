import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { bookReducer } from './book-reducer';
import { mainReducer } from './main-reducer';
import { registrationReducer } from './registration-reducer';
import { userReducer } from './user-reducer';

const rootReducer = combineReducers({
  mainReducer,
  bookReducer,
  registrationReducer,
  userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
