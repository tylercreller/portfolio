import React from 'react';

const Header = () => (
	<div className="header">
		<img className="header__avatar" src="images/avatar.png"></img>
		<div className="menu-name menu-text">tyler creller.</div>
		<div className="tagline">
			front-end developer who isn't afraid of full-stack.
		</div>
		<a className="header__email" href="mailto:tylercreller@gmail.com">
			tylercreller@gmail.com
		</a>
		<div className="header__icons">
			<a href="https://github.com/tylercreller">
				<i class="fab fa-github fa-lg"></i>
			</a>
			<a href="https://linkedin.com/in/tyler-creller/">
				<i class="fab fa-linkedin-in fa-lg"></i>
			</a>
		</div>
	</div>
);

export default Header;
