import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      desc: response.data.weather[0].description,
      icon: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-drizzle.svg",
      date: response.data.dt,
    });
  }

  let city = "New York";
  let apiKey = "866a208a73eeff02182218e9441647a1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (weatherData.ready) {
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
        <h1 className="mt-5">{weatherData.city}</h1>
        <ul>
          <li>
            {" "}
            <span className="temperature">{Math.round(weatherData.temp)}</span>
            <span className="unit">°C</span>
          </li>
          <li className="day-time">{weatherData.date}</li>
          <div className="row ">
            <div className="col-9">
              <ul>
                <li>
                  <img
                    src={weatherData.icon}
                    alt={weatherData.desc}
                    width="250px"
                  ></img>
                </li>
                <li className="description text-capitalize">
                  {weatherData.desc}
                </li>
              </ul>
            </div>
            <div className="col-3 detail">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    return "Loading...";
  }
}
