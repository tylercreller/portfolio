import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tracker from '../utils/tracking';

class SimpleMenu extends React.Component {
	state = {
		anchorEl: null
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleItemClick = link => {
		Tracker.trackClickEvent('External Menu Link', link);
		if (link) {
			window.open(link, '_blank');
		}
		this.handleClose();
	};

	render() {
		const { anchorEl } = this.state;

		return (
			<div className="simple-menu">
				<div
					className={this.props.className + ' ' + this.props.itemClassName}
					aria-owns={anchorEl ? 'simple-menu' : undefined}
					aria-haspopup="true"
					onClick={this.handleClick}
				>
					More
					<i className="fas fa-chevron-circle-down fa-xs" />
				</div>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<MenuItem
						className={this.props.itemClassName}
						onClick={this.handleItemClick.bind(
							this,
							'https://github.com/tylercreller'
						)}
					>
						GitHub
					</MenuItem>
					<MenuItem
						className={this.props.itemClassName}
						onClick={this.handleItemClick.bind(
							this,
							'https://www.linkedin.com/in/tyler-creller/'
						)}
					>
						LinkedIn
					</MenuItem>
					<MenuItem
						className={this.props.itemClassName}
						onClick={this.handleItemClick.bind(
							this,
							'Tyler_Creller_Resume.pdf'
						)}
					>
						Resume
					</MenuItem>
				</Menu>
			</div>
		);
	}
}

export default SimpleMenu;
