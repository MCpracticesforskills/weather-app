import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        {" "}
        <span className="WeatherForecast-max">
          {Math.round(props.data.temp.max)}° |
        </span>{" "}
        {""}
        <span className="WeatherForecast-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
