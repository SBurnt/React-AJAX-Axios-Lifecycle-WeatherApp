import React from "react";

import { getPrettyDateTomorrow, getTempFromKToC } from "./services";

function WeatherIteam(props) {
	// console.log("props WeatherIteam", props);
	if (Object.keys(props.data).length === 0) {
		return (<p>Loading...</p>);
	}

	let iconWeather = "http://openweathermap.org/img/w/" + props.data.weather[0].icon + ".png";

	return (
		<li className="liGroupContainerTomorrow">
			<p className="dateTimeTomorrow">{getPrettyDateTomorrow(props.data.dt)}</p>
			<img className="weatherIconTomorrow" src={iconWeather} alt="img weather" title={props.data.weather[0].description} />
			<p className="mainTempTomorrow"> {getTempFromKToC(props.data.main.temp)} °C</p>
		</li>
	)
}

export default WeatherIteam;

