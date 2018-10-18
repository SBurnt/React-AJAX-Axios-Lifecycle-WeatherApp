import React, { Component } from 'react';
import axios from "axios";
//https://www.npmjs.com/package/axios

import WeatherToday from "./WeatherToday";
import WeatherListTomorrow from "./WeatherListTomorrow";
import './css/WeatherApp.css';
// import { httpGet } from "./services";

class WeatherApp extends Component {
	constructor(props) {
		super(props);
		// console.log("создаем (инициализация)");

		this.state = {
			list: {},
			list2: {}
		}
	}

	componentWillMount() {
		// console.log("компонента БУДЕТ вмонтирована");
	}

	componentDidMount() {
		// console.log("компонента УЖЕ вмонтирована");
		// ajax для получения данных, чтобы их можно было использовать в компоненте

		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Минск&appid=f57a144803808ce82b7c0f4f05b07edc`)
			.then((result) => {
				console.log("axios 1", result);
				this.setState({ list: result.data });
			});

		axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=f57a144803808ce82b7c0f4f05b07edc`)
			.then((result) => {
				console.log("axios 5", result);
				this.setState({ list2: result.data });
			});

		// let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Минск&appid=f57a144803808ce82b7c0f4f05b07edc";
		// httpGet(apiUrl).then((result) => {
		//   // console.log(result);
		//   this.setState( { list: result } );
		// });

		// let apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=f57a144803808ce82b7c0f4f05b07edc";
		// httpGet(apiUrl2).then((result) => {
		//   // console.log(result);
		//   this.setState( { list2: result } );
		// });
	}

	componentDidUpdate() {
		// console.log("компонента УЖЕ обновлена");
		// ajax на обновление информации в БД (back-end)
	}

	render() {
		// console.log("отрисовка (монтаж)", this.state);

		return (
			<div className="AppContainer">
				<WeatherToday data={this.state.list} />
				<WeatherListTomorrow data={this.state.list2} />
			</div>
		);
	}
}

export default WeatherApp;
