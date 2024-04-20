import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn w-100" />
          </div>
        </div>
      </form>
      <h1 className="mt-5">New York</h1>
      <ul>
        <li>
          {" "}
          <span className="temperature">19</span>
          <span className="unit">°C</span>
        </li>
        <li className="day-time">Friday 09:00</li>
        <div className="row justify-content-md-center detail">
          <div className="col-3">
            <ul>
              <li>H: 72%</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>W: 13 km/h</li>
            </ul>
          </div>
        </div>
        <li>
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-drizzle.svg"
            alt="weather-icon"
            width="300px"
          ></img>
        </li>
        <li className="description">Mostly Cloudy</li>
      </ul>
    </div>
  );
}
