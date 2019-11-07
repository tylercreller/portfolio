import React from 'react';
import gridListData from '../data/gridListData';

class ProjectsV2 extends React.Component {
	handleClick = site => {
		window.open(site, '_blank', 'noreferrer');
	};
	render() {
		return (
			<div className="projects">
				<div className="projects-list">
					{gridListData.map(tile => (
						<div className="projects__tile" key={tile.img}>
							<div className="projects-image-crop">
								<img
									className={tile.class}
									src={tile.img}
									onClick={this.handleClick.bind(null, tile.site)}
								></img>
							</div>
							<div className="projects__title">
								<a href={tile.site} target="_blank" rel="noreferrer">
									{tile.title}
								</a>
								<div className="projects__role">{tile.role}</div>
								<div className="projects__stack">{tile.stack}</div>
							</div>
							<div className="projects__desc">{tile.desc}</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default ProjectsV2;
