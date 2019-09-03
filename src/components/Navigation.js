import React from 'react';
import { NavLink } from 'react-router-dom';
import SimpleMenu from './SimpleMenu';

const Navigation = () => (
	<div className='navigation'>
		<div className='navigation__links'>
			<NavLink
				className='menu-text navigation__link'
				activeClassName='navigation__link-active'
				to='/'
				exact={true}
			>
				home
			</NavLink>
			<NavLink
				className='menu-text navigation__link'
				activeClassName='navigation__link-active'
				to='/contact'
			>
				contact
			</NavLink>
			<SimpleMenu className='navigation__link' itemClassName='menu-text' />
		</div>
		<div className='menu-name menu-text'>tyler creller.</div>
		<div className='tagline'>
			front-end developer who isn't afraid of full-stack.
		</div>
	</div>
);

export default Navigation;
