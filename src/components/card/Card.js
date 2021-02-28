import React from "react";

export default function Card({ forecast }) {
  const { data } = forecast;
  const { name, weather, main, wind } = data;

  const { main: precipitation, icon } = weather[0];
  const { speed: windSpeed } = wind;
  const { temp, feels_like, pressure, humidity } = main;

  return (
    <div className="card">
      <p className="card__location">{name}</p>
      <div className="card__precipitation-icon-box">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={precipitation}
          className="card__precipitation-icon"
        />
      </div>
      <p className="card__temperature">
        <span className="card__temperature--actual">
          {Math.round(temp)} <sup>o</sup>
        </span>{" "}
        <span className="card__temperature--fact">
          Feels like {Math.round(feels_like)} <sup>o</sup>
        </span>
      </p>
      <ul className="card__details-list">
        <li className="card__details-item">
          Wind <span className="card__details-value">{windSpeed} m/s</span>
        </li>
        <li className="card__details-item">
          Pressure{" "}
          <span className="card__details-value">
            {Math.round(pressure / 1.333)} mmHg
          </span>
        </li>
        <li className="card__details-item">
          Humidity <span className="card__details-value">{humidity}%</span>
        </li>
      </ul>
    </div>
  );
}
