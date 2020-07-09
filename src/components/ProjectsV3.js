import React from 'react';
import gridListData from '../data/gridListData';

const ProjectsV3 = () => {
	const handleClick = site => {
		window.open(site, '_blank', 'noreferrer');
	};
	return (
		<div className='projectsV3'>
			<div className='projectsV3-list'>
				{gridListData.map((tile, index) => (
					<div className='projectsV3__tile' key={tile.img}>
						<div className={`projectsV3__box--${index % 2}`}>
							<div className='projectsV3__title'>
								<a href={tile.site} target='_blank' rel='noreferrer'>
									{tile.title}
								</a>
								<div className='projectsV3__role'>{tile.role}</div>
								<div className='projectsV3__stack'>{tile.stack}</div>
							</div>
							<div className='projectsV3__desc'>{tile.desc}</div>
						</div>
						<div className={`projectsV3-image-crop--${index % 2}`}>
							<img
								className={tile.class}
								src={tile.img}
								onClick={handleClick.bind(null, tile.site)}
							></img>
							<div className={`projectsV3-image-overlay--${index % 2}`}></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectsV3;
