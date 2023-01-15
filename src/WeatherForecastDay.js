import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemp() {
    const temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    const temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        {" "}
        <span className="WeatherForecast-max">{maxTemp()}° |</span> {""}
        <span className="WeatherForecast-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
