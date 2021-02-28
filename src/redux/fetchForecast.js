import {
  fetchForecastPending,
  fetchForecastSuccess,
  fetchForecastError,
} from "./action";

import { OpenWeatherMapApi } from "../services";
const openWeatherMapApi = new OpenWeatherMapApi();

export default function fetchForecast(location) {
  return async (dispatch) => {
    dispatch(fetchForecastPending());
    return openWeatherMapApi
      .getForecast(location)
      .then((data) => dispatch(fetchForecastSuccess(data)))
      .catch((err) => dispatch(fetchForecastError(err)));
  };
}
