import React from 'react';

const Navigation = () => (
	<div className="navigation">
		<a className="navigation__link" href="/">
			Welcome
		</a>
		<a className="navigation__link" href="/projects">
			Projects
		</a>
		<a
			className="navigation__link"
			href="https://github.com/tylercreller"
			target="_blank"
		>
			GitHub
		</a>
		<a
			className="navigation__link"
			href="https://www.linkedin.com/in/tyler-creller-942484100/"
			target="_blank"
		>
			LinkedIn
		</a>
		<a className="navigation__link" href="/contact">
			Contact
		</a>
	</div>
);

export default Navigation;
