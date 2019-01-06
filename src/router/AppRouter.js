import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Splash from '../components/Splash';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';
import Projects from '../components/Projects';

export default class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div style={{ height: '100%' }}>
					<Navigation />
					<Container>
						<Switch>
							<Route path="/" component={Splash} exact={true} />
							<Route path="/contact" component={Contact} />
							<Route path="/projects" component={Projects} />
							<Route component={NotFoundPage} />
						</Switch>
					</Container>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}
