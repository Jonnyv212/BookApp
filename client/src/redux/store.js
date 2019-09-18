import {BookReducers, AuthorReducers, DisplayReducers} from "./reducers/DataReducers";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  bookStates: BookReducers,
  authorStates: AuthorReducers,
  displayStates: DisplayReducers
});

export default createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));