import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tracker from '../utils/tracking';

const SimpleMenu = props => {
	const [anchorEl, setAnchorEl] = useState(null),
		handleClick = event => setAnchorEl(event.currentTarget),
		handleClose = () => setAnchorEl(null),
		handleItemClick = link => {
			Tracker.trackClickEvent('External Menu Link', link);
			if (link) {
				window.open(link, '_blank');
			}
			handleClose();
		};

	return (
		<div className='simple-menu'>
			<div
				className={props.className + ' ' + props.itemClassName}
				aria-owns={anchorEl ? 'simple-menu' : undefined}
				aria-haspopup='true'
				onClick={handleClick}
			>
				more <i className='fas fa-chevron-circle-down fa-xs' />
			</div>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem
					className={props.itemClassName}
					onClick={handleItemClick.bind(
						this,
						'https://github.com/tylercreller'
					)}
				>
					github
				</MenuItem>
				<MenuItem
					className={props.itemClassName}
					onClick={handleItemClick.bind(
						this,
						'https://www.linkedin.com/in/tyler-creller/'
					)}
				>
					linkedIn
				</MenuItem>
				<MenuItem
					className={props.itemClassName}
					onClick={handleItemClick.bind(this, 'Tyler_Creller_Resume.pdf')}
				>
					resume
				</MenuItem>
			</Menu>
		</div>
	);
};

export default SimpleMenu;
