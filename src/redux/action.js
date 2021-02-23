import { FORECAST_LOADED } from "./action-types";

const forecastLoaded = (data) => {
  return {
    type: FORECAST_LOADED,
    payload: data,
  };
};

export { forecastLoaded };
