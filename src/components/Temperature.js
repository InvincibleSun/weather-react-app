import React, { useState } from "react";

export default function Temperature({ celsius }) {
  const [units, setUnits] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {
    return (
      <div>
        <span className="temp">{Math.round(celsius)}</span>
        <span>
          °C /{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temp">{Math.round(celsius * 1.8 + 32)}</span>
        <span>
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          / °F
        </span>
      </div>
    );
  }
}
