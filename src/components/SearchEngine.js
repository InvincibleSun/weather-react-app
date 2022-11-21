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
          Find!
        </button>
        <button type="submit" className="current-location-btn" onClick={props.eventFindLocation}>
          Current location
        </button>
      </form>
    </header>
  );
}
