import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Conditions() {
  return (
    <div className="Conditions">
      <form className="Form">
        <input
          type="search"
          placeholder="Search for a city..."
          autoFocus="on"
        />
        <input type="submit" value="Search" />
      </form>
      <h1 className="pb-3">New York</h1>
      <h6>Wednesday 7:00AM </h6>
      <h6>Mostly Cloudy</h6>
      <div className="row mt-4">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="cloud with rain"
          ></img>

          <span className="degrees">6</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <h6>Precipitation: 20%</h6>
          <h6>Humidity: 45% </h6>
          <h6>Wind: 7 km/h</h6>
        </div>
      </div>
    </div>
  );
}
