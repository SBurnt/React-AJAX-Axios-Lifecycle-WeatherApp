import React from "react";

import { getPrettyDateToday, getTempFromKToC, getDirectionByDegree } from "./services";

function WeatherToday(props) {
  // console.log(props);
  // console.log(props.data);

  if (Object.keys(props.data).length === 0) {
    return (<p>Loading...</p>);
  }

  let iconWeather = "http://openweathermap.org/img/w/" + props.data.weather[0].icon + ".png";

  return (
    <div className="weatherToday">
      <p className="nameCountryToday"> {props.data.name}, {props.data.sys.country}</p>
      <div id="timeToday">
        <span className="spanNewTime"></span>
        <p className="dateTimeToday"> {getPrettyDateToday(props.data.dt)}</p>
      </div>
      <div id="imgToday">
        <img className="weatherIconToday" src={iconWeather} alt="img weather" title={props.data.weather[0].description} />
      </div>
      <div id="tempToday">
        <p className="mainTempToday"> {getTempFromKToC(props.data.main.temp)} °C</p>
      </div>
      <div id="blockWindDegSpeedToday">
        <div className="elemWindDegSpeed">
          <span className="spanNewWindDeg"></span>
          <p className="windDegToday"> {getDirectionByDegree(props.data.wind.deg)}</p>
        </div>
        <div className="elemWindDegSpeed">
          <span className="spanNewWindSpeed"></span>
          <p className="windSpeedToday"> {props.data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherToday;