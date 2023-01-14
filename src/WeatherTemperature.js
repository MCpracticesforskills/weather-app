import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertUnitFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertUnitCelcuis(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return;
    <div className="WeatherTemperature">
      <span className="degrees">{Math.round(props.celcius)}</span>
      <span className="units">
        °C |{" "}
        <a href="/" onClick={convertUnitFahrenheit}>
          °F
        </a>{" "}
      </span>
    </div>;
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return;
    <div className="WeatherTemperature">
      <span className="degrees">{Math.round(fahrenheit)}</span>
      <span className="units">
        °C |{" "}
        <a href="/" onClick={convertUnitCelcuis}>
          °F
        </a>{" "}
      </span>
    </div>;
  }
}
