import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2';

const styles = theme => ({
	contactTextField: {
		marginRight: theme.spacing.unit,
		marginBottom: 0,
		marginTop: 0,
		width: '100%'
	}
});

const initialState = {
	reply_to: '',
	from_name: '',
	message_html: '',
	isDirty: false,
	validCaptcha: false
};
class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	reset = () => {
		this.setState(initialState);
		grecaptcha.reset();
	};

	sendEmail = () => {
		this.setState({
			isDirty: true
		});
		if (
			this.state.from_name !== '' &&
			this.state.reply_to !== '' &&
			this.state.message_html !== ''
		) {
			if (this.state.validCaptcha) {
				var template_params = {
					from_name: this.state.from_name,
					reply_to: this.state.reply_to,
					message_html: this.state.message_html
				};

				var service_id = 'default_service';
				var template_id = 'portfolio_contact_2';
				emailjs.send(service_id, template_id, template_params);

				Swal('Sent!', 'Thanks for reaching out.', 'success');
				this.reset();
			} else {
				Swal('Oops', 'You must complete the CAPTCHA', 'error');
			}
		}
	};

	recaptchaSuccess = () => {
		this.setState({
			validCaptcha: true
		});
	};

	recaptchaExpired = () => {
		this.setState({
			validCaptcha: false
		});
	};

	handleChange = id => event => {
		this.setState({
			[id]: event.target.value
		});
	};

	renderCaptcha = () => {
		window.grecaptcha.render('g-recaptcha', {
			sitekey: '6LdFpYUUAAAAACLipDGv8ETlRDGyxCYjSbMFUVMy',
			callback: recaptchaSuccess,
			'expired-callback': recaptchaExpired
		});
	};

	componentDidMount() {
		window.recaptchaSuccess = this.recaptchaSuccess;
		window.recaptchaExpired = this.recaptchaExpired;

		if (!window.grecaptcha || !window.grecaptcha.render) {
			setTimeout(() => {
				this.renderCaptcha();
			}, 500);
		} else {
			this.renderCaptcha();
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div className="contact" data-aos="fade-in">
				<div className="large-text">
					Let's <div className="large-text--yellow">Chat</div>.
				</div>
				<Card className="contact__card">
					<CardContent className="contact__card__content">
						<form noValidate autoComplete="off">
							<Grid container spacing={24}>
								<Grid
									item
									xs={12}
									sm={6}
									className="contact__card__content__grid__item"
								>
									<TextField
										id="outlined-name"
										label="Name"
										className={classes.contactTextField}
										value={this.state.from_name}
										error={this.state.from_name === '' && this.state.isDirty}
										helperText={
											this.state.from_name === '' && this.state.isDirty
												? 'Required'
												: ''
										}
										onChange={this.handleChange('from_name')}
										margin="normal"
										variant="outlined"
										required
									/>
								</Grid>
								<Grid
									item
									xs={12}
									sm={6}
									className="contact__card__content__grid__item"
								>
									<TextField
										id="outlined-email-input"
										label="Email"
										className={classes.contactTextField}
										value={this.state.reply_to}
										error={this.state.reply_to === '' && this.state.isDirty}
										helperText={
											this.state.reply_to === '' && this.state.isDirty
												? 'Required'
												: ''
										}
										onChange={this.handleChange('reply_to')}
										type="email"
										name="email"
										autoComplete="email"
										margin="normal"
										variant="outlined"
										required
									/>
								</Grid>
								<Grid
									item
									xs={12}
									className="contact__card__content__grid__item"
								>
									<TextField
										id="outlined-multiline-static"
										label="Message"
										multiline
										rows="8"
										className={classes.contactTextField}
										value={this.state.message_html}
										error={this.state.message_html === '' && this.state.isDirty}
										helperText={
											this.state.message_html === '' && this.state.isDirty
												? 'Required'
												: ''
										}
										onChange={this.handleChange('message_html')}
										margin="normal"
										variant="outlined"
										fullWidth
										InputLabelProps={{
											shrink: true
										}}
										required
									/>
								</Grid>
							</Grid>
						</form>
					</CardContent>
					<div
						id="g-recaptcha"
						className="g-recaptcha"
						style={{ width: '100%' }}
					/>
					<Button
						className="contact__button"
						size="large"
						onClick={this.sendEmail}
					>
						Send
					</Button>
				</Card>
			</div>
		);
	}
}

Contact.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);
