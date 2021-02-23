import React from "react";
import { OpenWeatherMapConsumer } from "../context";

const withOpenWeatherMapService = () => (Wrapped) => {
  return (props) => {
    return (
      <OpenWeatherMapConsumer>
        {(openWeatherMapApi) => {
          return <Wrapped {...props} openWeatherMapApi={openWeatherMapApi} />;
        }}
      </OpenWeatherMapConsumer>
    );
  };
};

export default withOpenWeatherMapService;
