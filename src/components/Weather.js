import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setDesiredCity] = useState(defaultCity);
  const key = "43d3et5af795ffa0ab49fde8co6936b2";

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

  function getCoords(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrieveGeolocation);
  }

  function retrieveGeolocation(position) {
    const lon = position.coords.longitude.toFixed(2);
    const lat = position.coords.latitude.toFixed(2);

    axios
      .get(
        `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${key}&units=metric`
      )
      .then(displayResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <SearchEngine
          eventChange={handleChange}
          eventSubmit={handleSubmit}
          eventFindLocation={getCoords}
        />
        <CurrentWeather data={weatherData} />
        <Forecast/>
      </div>
    );
  } else {
    search();
    return (
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          "rgba(91, 173, 254, 0.26)",
          "rgba(91, 224, 254, 0.46)",
          "rgba(230, 254, 235, 0.93)",
          "#07f",
          "#d7e5f3",
        ]}
      />
    );
  }
}
