import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { forecastReducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  forecastReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
