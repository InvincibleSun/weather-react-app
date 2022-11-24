import React from "react";

export default function SearchEngine(props) {
  return (
    <header>
      <form id="city" onSubmit={props.eventSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Find your city..."
          className="city-input"
          autoComplete="on"
          onChange={props.eventChange}
        />
        <button type="submit" className="find-city-btn">
          Search <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button type="submit" className="current-location-btn" onClick={props.eventFindLocation}>
          Current location <i className="fa-solid fa-magnifying-glass-location"></i>
        </button>
      </form>
    </header>
  );
}
