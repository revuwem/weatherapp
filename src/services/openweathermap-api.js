import axios from "axios";

export default class OpenWeatherMapApi {
  _getResponse = async (options) => {
    return await axios.request(options);
  };

  getForecast = async (location) => {
    const options = {
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
        q: location,
        appid: process.env.REACT_APP_OPENWEATHERMAP_KEY,
        units: "metric",
      },
    };

    return await this._getResponse(options);
  };
}
