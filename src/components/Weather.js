import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import SearchEngine from "./SearchEngine";
import axios from "axios";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setDesiredCity] = useState(defaultCity);

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

  function search() {
    const key = "43d3et5af795ffa0ab49fde8co6936b2";
    axios
      .get(`https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`)
      .then(displayResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setDesiredCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <SearchEngine eventChange={handleChange} eventSubmit={handleSubmit} />
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}
