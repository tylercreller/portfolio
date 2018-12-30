import React from 'react';

const Footer = () => {
	const d = new Date();
	return (
		<div className="footer">
			<div className="footer__content">
				<div>Copyright © {d.getFullYear()} Tyler Creller</div>
				<div>Powered by Cold Brew & Pizza</div>
			</div>
		</div>
	);
};

export default Footer;
