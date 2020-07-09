import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import NotFoundPage from '../components/NotFoundPage';
import Projects from '../components/ProjectsV3';

export default class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div style={{ height: '100%' }}>
					<Particles
						style={{ position: 'fixed', zIndex: -1 }}
						params={{
							particles: {
								color: {
									value: '#ffffff'
								},
								number: {
									value: 100,
									density: {
										enable: true,
										value_area: 1500
									}
								},
								line_linked: {
									enable: true,
									opacity: 0.1,
									width: 0.5,
									distance: 192,
									shadow: {
										enable: true,
										color: '#6c5ce7',
										blur: 5
									}
								},
								move: {
									direction: 'bottom-right',
									speed: 2
								},
								size: {
									value: 1
								},
								opacity: {
									anim: {
										enable: true,
										speed: 1,
										opacity_min: 0.05
									}
								}
							},
							retina_detect: true
						}}
					/>
					<Header />
					<Container>
						<Switch>
							<Route path='/' component={Projects} exact={true} />
							<Route component={NotFoundPage} />
						</Switch>
					</Container>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}
