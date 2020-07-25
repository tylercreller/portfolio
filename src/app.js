import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppRouter from './router/AppRouter';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/' component={AppRouter} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app')
);
