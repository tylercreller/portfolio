import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import NotFoundPage from '../components/NotFoundPage';
import Projects from '../components/ProjectsV2';

export default class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div style={{ height: '100%' }}>
					<Header />
					<Container>
						<Switch>
							<Route path="/" component={Projects} exact={true} />
							<Route component={NotFoundPage} />
						</Switch>
					</Container>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}
