import React from 'react';
import TextLoop from 'react-text-loop';

const Header = () => (
	<div className='header'>
		<div className='hero-text'>
			<strong>tyler creller</strong> is an upstate new york based full-stack
			javascript engineer, and{' '}
			<TextLoop mask={true}>
				<span>cloud developer</span>
				<span>dog dad</span>
				<span>video game enthusiast</span>
			</TextLoop>
			{'.'}
		</div>
		<div className='header__icons'>
			<a href='mailto:tylercreller@gmail.com' target='_blank'>
				<i className='far fa-envelope fa-2x'></i>
			</a>
			<a href='https://github.com/tylercreller' target='_blank'>
				<i className='fab fa-github fa-2x'></i>
			</a>
			<a href='https://linkedin.com/in/tyler-creller/' target='_blank'>
				<i className='fab fa-linkedin-in fa-2x'></i>
			</a>
			<a href='https://www.instagram.com/_tycrell/' target='_blank'>
				<i className='fab fa-instagram fa-2x'></i>
			</a>
		</div>
		<div className='hero-text__tagline'>
			I currently work at{' '}
			<a
				className='hero-text__tagline__company'
				href='https://www.devcoredigital.com/'
				target='_blank'
			>
				DevCore Digital Services
			</a>
			{'.'}
		</div>
	</div>
);

export default Header;
