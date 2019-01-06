import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import gridListData from '../data/gridListData';

const styles = () => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'hidden',
		backgroundColor: 'initial'
	},
	button: {
		'&:hover': {
			backgroundColor: 'transparent'
		}
	}
});

function navigateToLink(link) {
	window.open(link, '_blank');
}

function ProjectsGridList(props) {
	const { classes } = props;

	return (
		<div className="projects" data-aos="fade-in">
			<div className="large-text">Projects</div>
			<div className={classes.root}>
				<GridList cellHeight={180}>
					{gridListData.map(tile => (
						<GridListTile key={tile.img} className="projects__gridList__tile">
							<img
								src={tile.img}
								alt={tile.title}
								title={tile.title}
								onClick={navigateToLink.bind(this, tile.site)}
							/>
							<GridListTileBar
								className="projects__gridList__tile__bar"
								title={
									<div className="projects__gridList__tile__site-title">
										{tile.title}
									</div>
								}
								subtitle={
									<span>
										<a
											className="projects__gridList__tile__site-link"
											href={tile.site}
											target="_blank"
										>
											{tile.site}
										</a>
									</span>
								}
								actionIcon={
									<IconButton className={classes.button} disableRipple>
										{tile.actionLink && (
											<a
												className="projects__gridList__tile__action-link"
												href={tile.actionLink}
												target="_blank"
											>
												<i
													className="fab fa-github fa-3x"
													title="View on GitHub"
												/>
											</a>
										)}
										<div className="projects__gridList__tile__tech">
											{tile.tech}
										</div>
									</IconButton>
								}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
		</div>
	);
}

ProjectsGridList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectsGridList);
