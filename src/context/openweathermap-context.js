import React from "react";

const { Provider: OpenWeatherMapProvider, Consumer: OpenWeatherMapConsumer } =
  React.createContext();

export { OpenWeatherMapProvider, OpenWeatherMapConsumer };
