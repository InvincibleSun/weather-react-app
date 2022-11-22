import React, { useState } from "react";
// import axios from "axios";

export default function Weather() {
  return (
    <section className="forecast">
      <div className="forecast-row">
        <div className="forecast-item">
          <div className="forecast-elem">
            <p className="forecast-day">Mon</p>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="icon"
            />
            <div className="forecast-temp">
              <span className="forecast-temp-max">10°</span>{" "}
              <span className="forecast-temp-min">1°</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
