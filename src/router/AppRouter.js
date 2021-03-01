import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
	render() {
		return (
			<div style={{ height: '100%' }}>
				<Header />
				<Footer />
			</div>
		);
	}
}
