import axios from "axios";

export default class OpenWeatherMapApi {
  _getResponse = async (options) => {
    return await axios
      .request(options)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  getForecast = async (city) => {
    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: city,
        callback: "test",
        id: "2172797",
        lang: "ru",
        units: "metric",
        mode: "xml, html",
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_OPENWEATHERMAP_KEY,
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    };

    return await this._getResponse(options);
  };
}
