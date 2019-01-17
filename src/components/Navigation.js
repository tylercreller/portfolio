import React from 'react';
import { NavLink } from 'react-router-dom';
import SimpleMenu from './SimpleMenu';

const Navigation = () => (
	<div className="navigation">
		<NavLink
			className="menu-text navigation__link"
			activeClassName="navigation__link-active"
			to="/"
			exact={true}
		>
			Home
		</NavLink>
		<NavLink
			className="menu-text navigation__link"
			activeClassName="navigation__link-active"
			to="/projects"
		>
			Projects
		</NavLink>
		<NavLink
			className="menu-text navigation__link"
			activeClassName="navigation__link-active"
			to="/contact"
		>
			Contact
		</NavLink>
		<SimpleMenu className="navigation__link" itemClassName="menu-text" />
	</div>
);

export default Navigation;
