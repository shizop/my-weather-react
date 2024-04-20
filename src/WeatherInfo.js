import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-5">{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <span className="temperature">{Math.round(props.data.temp)}</span>
          <span className="unit">°C</span>
        </li>
        <li className="day-time">{props.data.date}</li>
        <div className="row ">
          <div className="col-9">
            <ul>
              <li>
                <img
                  src={props.data.icon}
                  alt={props.data.desc}
                  width="250px"
                ></img>
              </li>
              <li className="description text-capitalize">{props.data.desc}</li>
            </ul>
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
