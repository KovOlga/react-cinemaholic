import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { filmsReducer } from "./reducer";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({ films: filmsReducer });

export const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, enhancer);
