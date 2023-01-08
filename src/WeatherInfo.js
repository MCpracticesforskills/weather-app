import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="pb-3 pt-4">{props.data.city}</h1>
      <h6>
        <FormattedDate date={props.data.date} />
      </h6>
      <h6 className="text-capitalize">{props.data.description}</h6>
      <div className="row mt-4">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description}></img>

          <span className="degrees">{Math.round(props.data.temperature)}</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <h6>Humidity: {props.data.humidity}% </h6>
          <h6>Wind: {Math.round(props.data.wind)} km/h</h6>
        </div>
      </div>
    </div>
  );
}
