import React from 'react';
import TextLoop from 'react-text-loop';

const Splash = () => {
	return (
		<div className="splash" data-aos="fade-in">
			<div className="splash__title">
				<div className="splash__title__content large-text">
					Hello!
					<br />
					My name is{' '}
					<div id="name" className="large-text--yellow">
						Tyler
					</div>
					.
					<div>
						I am a...
						<div className="splash__title__content__loop">
							<TextLoop>
								<div>
									<a
										href="https://www.linkedin.com/in/tyler-creller/"
										target="_blank"
										rel="noreferrer"
									>
										<div>Web Developer</div>
									</a>
								</div>
								<div>
									<a
										href="https://www.instagram.com/p/BvwBb4wgTpB/"
										target="_blank"
										rel="noreferrer"
									>
										Dog Dad
									</a>
								</div>
								<div>
									<a
										href="https://www.instagram.com/p/BkApnM5Dz_T/"
										target="_blank"
										rel="noreferrer"
									>
										Foodie
									</a>
								</div>
								<div>
									<a
										href="https://www.instagram.com/p/BhHjzwGnS6_/"
										target="_blank"
										rel="noreferrer"
									>
										Musician
									</a>
								</div>
							</TextLoop>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Splash;
