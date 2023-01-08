import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import axios from "axios";

export default function Conditions() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
      date: "Wednesday 7:00",
    });
  }

  if (weatherData.ready) {
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
        <h1 className="pb-3 pt-4">{weatherData.city}</h1>
        <h6>{weatherData.date}</h6>
        <h6 className="text-capitalize">{weatherData.description}</h6>
        <div className="row mt-4">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>

            <span className="degrees">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <h6>Humidity: {weatherData.humidity}% </h6>
            <h6>Wind: {Math.round(weatherData.wind)} km/h</h6>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b791624f59276c950435fa9627cd9828";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
