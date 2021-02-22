import React from "react";
import ReactDOM from "react-dom";

import { OpenWeatherMapApi } from "./services";

import App from "./components/app";

import "./styles/main.scss";

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
