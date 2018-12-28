import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	dense: {
		marginTop: 16
	},
	menu: {
		width: 200
	}
});

class Contact extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className="contact" data-aos="fade-in">
				<div className="contact__header">Let's Chat.</div>
				<form noValidate autoComplete="off">
					<TextField
						id="outlined-name"
						label="Name"
						className={classes.textField}
						// value={this.state.name}
						// onChange={this.handleChange('name')}
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="outlined-email-input"
						label="Email"
						className="form-input"
						// className={classes.textField}
						type="email"
						name="email"
						autoComplete="email"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="outlined-multiline-static"
						label="Multiline"
						multiline
						rows="8"
						placeholder="Insert Message Here."
						// className={classes.textField}
						margin="normal"
						variant="outlined"
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
					/>
				</form>
			</div>
		);
	}
}

Contact.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);
