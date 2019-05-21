import React from 'react';

const angularIcon = (
	<i className="fab fa-angular fa-3x" title="Built with AngularJS" />
);
const reactIcon = <i className="fab fa-react fa-3x" title="Built with React" />;

export default [
	{
		img: 'images/flex-dashboard-flat.jpg',
		title: 'Paychex Flex ©',
		site: 'https://myapps.paychex.com',
		tech: angularIcon
	},
	{
		img: 'images/diluted-min.png',
		title: 'Diluted Band',
		site: 'https://www.dilutedband.com',
		actionLink: 'https://github.com/tylercreller/diluted-band',
		tech: reactIcon
	},
	{
		img: 'images/exposure.png',
		title: 'Get Paid in Exposure!',
		site: 'https://www.paid-in-exposure.com',
		tech: reactIcon
	}
];
