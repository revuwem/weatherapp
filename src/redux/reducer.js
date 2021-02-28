import {
  FETCH_FORECAST_PENDING,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_ERROR,
} from "./action-types";

const inititalState = {
  pending: false,
  forecast: null,
  error: null,
};

export const forecastReducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_FORECAST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
