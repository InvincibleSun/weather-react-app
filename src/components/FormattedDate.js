import React from "react";

export default function FormattedDate({ date }) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[date.getDay()];

  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const year = date.getFullYear();

  let month = date.getMonth();
  if (month < 10) {
    month = "0" + month;
  }

  let num = date.getDate();
  if (num < 10) {
    num = "0" + num;
  }

  return (
    <div className="time">
      {day} {hours}:{minutes} | {num}.{+month + 1}.{year}
    </div>
  );
}
