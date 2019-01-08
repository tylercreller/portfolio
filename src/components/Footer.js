import React from 'react';

const Footer = () => {
	const d = new Date();
	return (
		<div className="footer">
			<div className="footer__content">
				<div>Copyright © {d.getFullYear()} Tyler Creller</div>
				<div>Powered by Cold Brew, Pizza and ReactJS</div>
				<a
					href="https://github.com/tylercreller/portfolio"
					target="_blank"
					rel="noreferrer"
				>
					View this site on GitHub
				</a>
			</div>
		</div>
	);
};

export default Footer;
