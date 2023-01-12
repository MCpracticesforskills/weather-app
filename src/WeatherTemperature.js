import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  if (unit === "celcius") {
    <div className="WeatherTemperature">
      <span className="degrees">{Math.round(props.celcius)}</span>
      <span className="units">°C | °F </span>
    </div>;
  } else {
    <p>Fahrenheit</p>;
  }
}
