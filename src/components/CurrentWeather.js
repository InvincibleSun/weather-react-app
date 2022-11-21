import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import img from "../img/img-1.png";

export default function CurrentWeather({ data }) {
  return (
    <main>
      <FormattedDate date={data.date} />
      <section className="current-weather" style={{ backgroundImage: `url(${img})` }}>
        <Temperature celsius={data.temp} />
        <h1>{data.city}</h1>
        <img
          src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data.icon}.png`}
          alt={data.description}
          className="icon"
          width="100"
          height="100"
        ></img>
        <p className="description">{data.description}</p>
        <p className="humidity">
          Humidity: <b>{data.humidity}</b> %
        </p>
        <p className="wind">
          Wind: <b>{Math.round(data.wind)}</b> km/h
        </p>
      </section>
    </main>
  );
}
