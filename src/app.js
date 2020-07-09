import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppRouter from './router/AppRouter';
import RandomGif from './components/RandomGif';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/random-gif' exact={true} component={RandomGif} />
			<Route path='/' component={AppRouter} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('app')
);
