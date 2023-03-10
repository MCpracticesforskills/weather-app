import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Conditions(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "b791624f59276c950435fa9627cd9828";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="Conditions">
        <form className="Form" onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleCitySearch}
            placeholder="Search for a city..."
            autoFocus="on"
          />

          <input type="submit" value="Search" />
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
