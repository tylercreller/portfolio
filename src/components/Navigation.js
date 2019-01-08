import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
	<div className="navigation">
		<NavLink
			className="navigation__link"
			activeClassName="navigation__link-active"
			to="/"
			exact={true}
		>
			Home
		</NavLink>
		<NavLink
			className="navigation__link"
			activeClassName="navigation__link-active"
			to="/projects"
		>
			Projects
		</NavLink>
		<a
			className="navigation__link"
			href="https://github.com/tylercreller"
			target="_blank"
			rel="noreferrer"
		>
			GitHub
		</a>
		<a
			className="navigation__link"
			href="https://www.linkedin.com/in/tyler-creller/"
			target="_blank"
			rel="noreferrer"
		>
			LinkedIn
		</a>
		<NavLink
			className="navigation__link"
			activeClassName="navigation__link-active"
			to="/contact"
		>
			Contact
		</NavLink>
	</div>
);

export default Navigation;
