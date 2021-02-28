import {
  FETCH_FORECAST_PENDING,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_ERROR,
} from "./action-types";

export const fetchForecastPending = () => {
  return {
    type: FETCH_FORECAST_PENDING,
  };
};

export const fetchForecastSuccess = (data) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: {
      forecast: data,
      pending: false,
    },
  };
};

export const fetchForecastError = (error) => {
  return {
    type: FETCH_FORECAST_ERROR,
    payload: error,
  };
};
