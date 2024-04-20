import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-5">{props.data.city}</h1>
      <ul>
        <li>
          <WeatherTemperature celcius={props.data.temp} />
        </li>
        <li className="day-time">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description text-capitalize">{props.data.desc}</li>
        <div className="row ">
          <div className="col-9">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={250}
            />
          </div>
          <div className="col-3 detail">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
