// import React from 'react';

// export default class ProjectInfo extends React.Component {

// 	render() {
// 		return (
// 			<div>
// 				<div id="overlay" />
// 				<div className="project-info">
// 					<img src={this.props.projImg} />
// 					<h4>{this.props.projTitle}</h4>
// 					<p>{this.props.projSummary}</p>
// 					<div className="project-info__footer">
// 						<div>{this.props.projSite}</div>
// 						{this.props.projActionLink && (
// 							<a href={this.props.projActionLink} target="_blank">
// 								View on Github
// 							</a>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ProjectInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {
		open: true
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { fullScreen } = this.props;

		return (
			<div>
				<Button
					variant="outlined"
					color="primary"
					onClick={this.handleClickOpen}
				>
					Open responsive dialog
				</Button>
				<Dialog
					fullScreen={fullScreen}
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogTitle id="responsive-dialog-title">
						{"Use Google's location service?"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Let Google help apps determine location. This means sending
							anonymous location data to Google, even when no apps are running.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Disagree
						</Button>
						<Button onClick={this.handleClose} color="primary" autoFocus>
							Agree
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

ProjectInfo.propTypes = {
	fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ProjectInfo);
