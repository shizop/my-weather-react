import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecast-detail">
      <div className="WeatherForecast-day mb-3">{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
        size={80}
      />
      <div className="WeatherForecast-temp ">
        <span className="WeatherForecast-temp-max">{maxTemp()}</span>
        <span className="WeatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
