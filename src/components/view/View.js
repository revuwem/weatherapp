import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import fetchForecast from "../../redux/fetchForecast";

import Card from "../card";

export default function View({ location }) {
  const dispatch = useDispatch();

  const { forecast, error } = useSelector((state) => ({
    forecast: state.forecast,
    error: state.error,
  }));

  useEffect(() => dispatch(fetchForecast(location)), [dispatch, location]);

  if (error) return <div>We couldn't get forecast for {location}</div>;
  if (forecast) return <Card forecast={forecast} />;

  return <div>Loading...</div>;
}
