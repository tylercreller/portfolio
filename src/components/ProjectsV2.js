import React from 'react';
import gridListData from '../data/gridListData';

class ProjectsV2 extends React.Component {
	render() {
		return (
			<div className='projects' data-aos='fade-in'>
				<div className='title-text'>Latest projects</div>
				<div className='projects-list'>
					{gridListData.map(tile => (
						<div className='projects__tile' key={tile.img}>
							<div className='projects-image-crop'>
								<img className={tile.class} src={tile.img}></img>
							</div>
							<div className='project-title'>
								<a href={tile.site} target='_blank' rel='noreferrer'>
									{tile.title}
								</a>
							</div>
							<div className='project-desc'>{tile.desc}</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default ProjectsV2;
