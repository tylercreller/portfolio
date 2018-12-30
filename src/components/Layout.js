import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Container from './Container';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<Container>{this.props.children}</Container>
				<Footer />
			</div>
		);
	}
}
