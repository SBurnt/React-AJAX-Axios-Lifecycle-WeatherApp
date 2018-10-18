import React from "react";

import WeatherIteam from "./WeatherIteam";

function WeatherListTomorrow(props) {
	// console.log("WeatherListTomorrow", props);
	// console.log(props.data);

	if (Object.keys(props.data).length === 0) {
		return (<p>Loading...</p>);
	}

	// сортировка каждого 8 элемента list
	// let filterArr = renderMarkupTomorrow(props.data.list);
	// либо так через filter
	let filterArr = props.data.list.filter((item, index) => { return index % 8 === 0 });

	return (
		<ul className="weatherListTomorrow">
			{filterArr.map(function (item, index) {
				// console.log("item map", index, item);
				return (
					<WeatherIteam key={index} data={item} />
				);
			}
			)}
		</ul>
	)
}

export default WeatherListTomorrow;