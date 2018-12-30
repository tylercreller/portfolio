import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Container from './Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Splash from './Splash';
import Contact from './Contact';
import NotFoundPage from './NotFoundPage';
import Projects from './Projects';

export default class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
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
