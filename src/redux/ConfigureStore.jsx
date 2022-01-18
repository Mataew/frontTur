import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger/src';

const combineReducer = combineReducers({});

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;