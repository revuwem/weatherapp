import { createStore } from "redux";
import forecastReducer from "./reducer";

const store = createStore(forecastReducer);

export default store;
