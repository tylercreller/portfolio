import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import gridListData from '../data/gridListData';
import Layout from './Layout';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: '',
		overflow: 'hidden',
		backgroundColor: 'initial'
	}
});

function ProjectsGridList(props) {
	const { classes } = props;

	return (
		<Layout>
			<div className="projects">
				<div className="large-text">Projects</div>
				<div className={classes.root}>
					<GridList cellHeight={180}>
						{gridListData.map(tile => (
							<GridListTile key={tile.img}>
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={
										<div className="projects__gridList__site-title">
											{tile.title}
										</div>
									}
									subtitle={
										<span>
											<a
												className="projects__gridList__site-link"
												href={tile.site}
												target="_blank"
											>
												{tile.site}
											</a>
										</span>
									}
									actionIcon={
										tile.actionLink && (
											<IconButton>
												<a
													className="projects__gridList__action-link"
													href={tile.actionLink}
													target="_blank"
												>
													<i className="fab fa-github fa-2x" />
												</a>
											</IconButton>
										)
									}
								/>
							</GridListTile>
						))}
					</GridList>
				</div>
			</div>
		</Layout>
	);
}

ProjectsGridList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectsGridList);
