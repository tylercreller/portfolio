import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
	applyMargin: {
		marginLeft: theme.spacing.unit
	},
	dense: {
		marginTop: 16
	},
	menu: {
		width: 200
	}
});

class Contact extends React.Component {
	state = {
		reply_to: '',
		from_name: '',
		message_html: ''
	};

	sendEmail = () => {
		var template_params = {
			from_name: this.state.from_name,
			reply_to: this.state.reply_to,
			message_html: this.state.message_html
		};

		var service_id = 'default_service';
		var template_id = 'portfolio_contact_2';
		emailjs.send(service_id, template_id, template_params);
	};

	handleChange = id => event => {
		this.setState({
			[id]: event.target.value
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className="contact" data-aos="fade-in">
				<Card>
					<CardContent>
						<div className="contact__header">Let's Chat.</div>
						<form noValidate autoComplete="off">
							<TextField
								id="outlined-name"
								label="Name"
								className={classes.textField}
								value={this.state.from_name}
								onChange={this.handleChange('from_name')}
								margin="normal"
								variant="outlined"
								required
								style={{ width: '28%' }}
							/>
							<TextField
								id="outlined-email-input"
								label="Email"
								className="form-input"
								className={classes.textField}
								value={this.state.reply_to}
								onChange={this.handleChange('reply_to')}
								type="email"
								name="email"
								autoComplete="email"
								margin="normal"
								variant="outlined"
								required
								style={{ width: '65%' }}
							/>
							<TextField
								id="outlined-multiline-static"
								label="Message"
								multiline
								rows="8"
								className={classes.textField}
								value={this.state.message_html}
								onChange={this.handleChange('message_html')}
								margin="normal"
								variant="outlined"
								fullWidth
								InputLabelProps={{
									shrink: true
								}}
								required
								style={{ width: '96%' }}
							/>
						</form>
					</CardContent>
					<CardActions>
						<Button
							className={[classes.applyMargin, 'contact__button'].join(' ')}
							size="large"
							onClick={this.sendEmail}
						>
							Send
						</Button>
					</CardActions>
					<CardActions>
						<div
							className={[classes.applyMargin, 'g-recaptcha'].join(' ')}
							data-sitekey="6LdFpYUUAAAAACLipDGv8ETlRDGyxCYjSbMFUVMy"
						/>
					</CardActions>
				</Card>
			</div>
		);
	}
}

Contact.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);
