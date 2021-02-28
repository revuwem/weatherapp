import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { OpenWeatherMapProvider } from "./context";
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import "./styles/main.scss";

const root = document.getElementById("root");

ReactDOM.render(
  <ReduxProvider store={store}>
    <ErrorBoundary>
      <OpenWeatherMapProvider>
        <App />
      </OpenWeatherMapProvider>
    </ErrorBoundary>
  </ReduxProvider>,
  root
);
