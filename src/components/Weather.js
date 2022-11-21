import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header>
          <form id="city">
            <input
              type="text"
              name="city"
              placeholder="Find your city..."
              className="city-input"
              autoComplete="on"
            />
            <button type="submit" className="find-city-btn">
              Find!
            </button>
            <button type="submit" className="current-location-btn">
              Current location
            </button>
          </form>
        </header>
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    const key = "43d3et5af795ffa0ab49fde8co6936b2";

    axios
      .get(
        `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${key}&units=metric`
      )
      .then(displayResponse);

    return <h1>Loading...</h1>;
  }
}
