import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import img from "../img/img-1.png";
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
            <FormattedDate date={weatherData.date} />
          </form>
        </header>
        <main>
          <section className="current-weather" style={{ backgroundImage: `url(${img})` }}>
            <h2>
              <span className="temp">{Math.round(weatherData.temp)}</span>°C
            </h2>
            <h1>{weatherData.city}</h1>
            <img
              src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}.png`}
              alt={weatherData.description}
              className="icon"
              width="100"
              height="100"
            ></img>
            <p className="description">{weatherData.description}</p>
            <p className="humidity">
              Humidity: <b>{weatherData.humidity}</b> %
            </p>
            <p className="wind">
              Wind: <b>{Math.round(weatherData.wind)}</b> km/h
            </p>
          </section>
        </main>
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
