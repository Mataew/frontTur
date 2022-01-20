import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger/src';
import  turReducer  from "./features/searchReducer"
import authorizatonReducer from './reducerAuthorization';

const combineReducer = combineReducers({turReducer, authorizatonReducer});

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;