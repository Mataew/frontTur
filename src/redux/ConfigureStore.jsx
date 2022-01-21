import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger/src';
import  turReducer  from "./features/searchReducer"
import authorizatonReducer from './reducerAuthorization';
import usersReducer from './features/usersReducer';

const combineReducer = combineReducers({turReducer, authorizatonReducer, usersReducer});

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;