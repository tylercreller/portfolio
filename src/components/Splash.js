import React from 'react';
import TextLoop from 'react-text-loop';
import Layout from './Layout';

const Splash = () => {
	return (
		<Layout>
			<div className="splash">
				<div className="splash__title" data-aos="fade-in">
					<div className="splash__title_content">
						Hello!
						<br />
						My name is <div id="name">Tyler</div>.
						<div>
							I am a...
							<div className="splash__title__content__loop">
								<TextLoop>
									<div>
										<a
											href="https://www.linkedin.com/in/tyler-creller-942484100/"
											target="_blank"
										>
											<div>Web Developer</div>
										</a>
									</div>
									<div>
										<a
											href="https://www.instagram.com/p/BqsAgJPgumi/"
											target="_blank"
										>
											Dog Dad
										</a>
									</div>
									<div>
										<a
											href="https://www.instagram.com/p/BkApnM5Dz_T/"
											target="_blank"
										>
											Foodie
										</a>
									</div>
									<div>
										<a
											href="https://www.instagram.com/p/BlTheP1HL_y/"
											target="_blank"
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
		</Layout>
	);
};

export default Splash;
