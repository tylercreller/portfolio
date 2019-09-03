import React from 'react';
import Swal from 'sweetalert2';

const initialState = {
	reply_to: '',
	from_name: '',
	message_html: '',
	isDirty: false,
	validCaptcha: false
};
export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	reset = () => {
		this.setState(initialState);
		window.grecaptcha.reset();
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
		return window.grecaptcha.render('g-recaptcha', {
			sitekey: '6LdFpYUUAAAAACLipDGv8ETlRDGyxCYjSbMFUVMy',
			callback: recaptchaSuccess,
			'expired-callback': recaptchaExpired
		});
	};

	displayRequired = () => {
		return <p className='contact__card__content__helper-text'>Required</p>;
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
		return (
			<div className='contact' data-aos='fade-in'>
				<div className='title-text'>Let's Chat.</div>
				<div className='contact__card'>
					<div className='contact__card__content'>
						<form noValidate autoComplete='off'>
							<div className='contact__card__content__name'>
								<label htmlFor='name'>Name *</label>
								<input
									id='name'
									className='contact__card__content__input'
									value={this.state.from_name}
									onChange={this.handleChange('from_name')}
									autoComplete='name'
									required
								/>
								{this.state.isDirty &&
									!this.state.from_name &&
									this.displayRequired()}
							</div>
							<div className='contact__card__content__email'>
								<label htmlFor='email'>Email *</label>
								<input
									id='email'
									className='contact__card__content__input'
									value={this.state.reply_to}
									onChange={this.handleChange('reply_to')}
									type='email'
									autoComplete='email'
									required
								/>
								{this.state.isDirty &&
									!this.state.reply_to &&
									this.displayRequired()}
							</div>
							<div className='contact__card__content__message'>
								<label htmlFor='message'>Message *</label>
								<textarea
									id='mesage'
									rows='8'
									className='contact__card__content__input'
									value={this.state.message_html}
									onChange={this.handleChange('message_html')}
									required
								/>
								{this.state.isDirty &&
									!this.state.message_html &&
									this.displayRequired()}
							</div>
						</form>
						<div
							id='g-recaptcha'
							className='g-recaptcha'
							style={{ width: '100%' }}
						/>
						<button
							className='contact__button'
							size='large'
							onClick={this.sendEmail}
						>
							SEND
						</button>
					</div>
				</div>
			</div>
		);
	}
}
