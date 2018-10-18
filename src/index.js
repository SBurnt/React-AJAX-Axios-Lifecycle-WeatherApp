import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import WeatherApp from './WeatherApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WeatherApp />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
	module.hot.accept();
}