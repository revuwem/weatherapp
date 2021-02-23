import { FORECAST_LOADED } from "./action-types";

const initialState = {
  forecast: null,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORECAST_LOADED:
      return {
        ...state,
        forecast: action.payload,
      };
    default:
      return state;
  }
};

export { forecastReducer };
