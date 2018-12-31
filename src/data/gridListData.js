import React from 'react';
import dilutedImage from '../../public/images/diluted-min.png';
import flexImage from '../../public/images/flex-dashboard-flat.jpg';

const angularIcon = (
	<i className="fab fa-angular fa-3x" title="Built with AngularJS" />
);
const reactIcon = <i className="fab fa-react fa-3x" title="Built with React" />;

export default [
	{
		img: flexImage,
		title: 'Paychex Flex ©',
		site: 'https://myapps.paychex.com',
		tech: angularIcon
	},
	{
		img: dilutedImage,
		title: 'Diluted Band',
		site: 'http://www.dilutedband.com',
		actionLink: 'https://github.com/tylercreller/diluted-band',
		tech: reactIcon
	}
];
