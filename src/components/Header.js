import React from 'react';

const Header = () => (
	<div className='header'>
		<img className='header__avatar' src='images/avatar.png'></img>
		<div className='menu-name menu-text'>tyler creller.</div>
		<div className='tagline'>
			dog dad, musician, and full stack engineer specializing in front-end
			development.
		</div>
		<a className='header__email' href='mailto:tylercreller@gmail.com'>
			tylercreller@gmail.com
		</a>
		<div className='header__icons'>
			<a href='https://github.com/tylercreller' target='_blank'>
				<i className='fab fa-github fa-lg'></i>
			</a>
			<a href='https://linkedin.com/in/tyler-creller/' target='_blank'>
				<i className='fab fa-linkedin-in fa-lg'></i>
			</a>
			<a href='https://www.instagram.com/_ty.js/' target='_blank'>
				<i className='fab fa-instagram fa-lg'></i>
			</a>
		</div>
	</div>
);

export default Header;
