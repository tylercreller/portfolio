import React from 'react';
import dilutedImage from '../../public/images/diluted-min.png';
import flexImage from '../../public/images/flex-dashboard-flat.jpg';

export default [
	{
		img: flexImage,
		title: 'Paychex Flex ©',
		site: 'https://myapps.paychex.com',
		tech: <i className="fab fa-angular fa-3x" alt="AngularJS" />
	},
	{
		img: dilutedImage,
		title: 'Diluted Band',
		site: 'http://www.dilutedband.com',
		actionLink: 'https://github.com/tylercreller/diluted-band',
		tech: <i className="fab fa-react fa-3x" alt="React" />
	}
];
