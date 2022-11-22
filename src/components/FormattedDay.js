import React from "react";

export default function FormattedDay({ date }) {
  const time = new Date(date * 1000);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[time.getDay()];

  return <p className="forecast-day">{day}</p>;
}
