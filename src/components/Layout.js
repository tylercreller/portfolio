import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
