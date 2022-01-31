import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import fetchForecast from "../../redux/fetchForecast";

import Card from "../card";

export default function View() {
  const { location } = useParams();
  console.log(location);

  const dispatch = useDispatch();

  const { forecast, error } = useSelector((state) => ({
    forecast: state.forecast,
    error: state.error,
  }));

  useEffect(() => dispatch(fetchForecast(location)), [dispatch, location]);

  const viewContent = error ? (
    <div>We couldn't get forecast for {location}</div>
  ) : forecast ? (
    <Card forecast={forecast} />
  ) : (
    <div>Loading...</div>
  );

  return <div className="view">{viewContent}</div>;
}
