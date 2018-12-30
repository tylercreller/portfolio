import React from 'react';

export default class Container extends React.Component {
	render() {
		return (
			<div className="container" data-aos="fade-in">
				{this.props.children}
			</div>
		);
	}
}
