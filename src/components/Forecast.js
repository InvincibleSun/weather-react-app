import React, { useState, useEffect } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import FormattedDay from "./FormattedDay";

export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [city]);

  function showForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function search() {
    const apiKey = "43d3et5af795ffa0ab49fde8co6936b2";
    axios
      .get(`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`)
      .then(showForecast);
  }

  if (ready) {
    return (
      <section className="forecast">
        <div className="forecast-row">
          {forecastData.map(function (item, index) {
            return (
              <div className="forecast-item" key={index}>
                <div className="forecast-elem">
                  <FormattedDay date={item.time} />
                  <img
                    src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${item.condition.icon}.png`}
                    alt={item.condition.icon}
                  />
                  <div className="forecast-temp">
                    <span className="forecast-temp-max">
                      {Math.round(item.temperature.maximum)}°
                    </span>
                    <span className="forecast-temp-min">
                      {Math.round(item.temperature.minimum)}°
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    search();
    return (
      <ColorRing
        visible={true}
        height="70"
        width="70"
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
