import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import NotFoundPage from '../components/NotFoundPage';
import Projects from '../components/ProjectsV2';

export default class Layout extends React.Component {
	render() {
		return (
			<div style={{ height: '100%' }}>
				<Particles
					style={{ position: 'fixed', zIndex: -1 }}
					params={{
						particles: {
							number: {
								value: 100,
								density: {
									enable: true,
									value_area: 1500
								}
							},
							line_linked: {
								enable: true,
								opacity: 0.05
							},
							move: {
								direction: 'right',
								speed: 0.05
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
					<BrowserRouter>
						<Switch>
							<Route path='/' component={Projects} exact={true} />
							<Route path='/404' component={NotFoundPage} exact={true} />
							<Redirect to='/404' />
						</Switch>
					</BrowserRouter>
				</Container>
				<Footer />
			</div>
		);
	}
}
