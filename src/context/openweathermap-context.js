import React from "react";
import { OpenWeatherMapApi } from "../services";

const openWeatherMapApi = new OpenWeatherMapApi();

const {
  Provider: OpenWeatherMapProvider,
  Consumer: OpenWeatherMapConsumer,
} = React.createContext(openWeatherMapApi);

export { OpenWeatherMapProvider, OpenWeatherMapConsumer };
