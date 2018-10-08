import React, { Component } from 'react';
import axios from 'axios';
import { css } from 'emotion';

import { _light, _shadow, _grey, _error } from '../lib/vars';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pending: false,
			success: false,
			errors: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	///////////////////////////////////////////////////////////
	////     ///  ///  ///     //        ///     ///   //   ///
	///  ///  //  ///  //  /////////  /////  ///  //        ///
	///  ///////  ///  ///    //////  /////  ///  //  /  /  ///
	///  ///  //  ///  //////  /////  /////  ///  //  ////  ///
	////     ////     ///     //////  //////     ///  ////  ///
	///////////////////////////////////////////////////////////

	handleChange(e) {
		const name = e.target.getAttribute('name');
		const text = e.target.value;

		this.setState({ [name]: text });
	}

	handleSubmit(e) {
		e.preventDefault();

		const { name, email, subject, text } = this.state;
		const message = { name, email, subject, text };

		this.setState({ pending: true });

		axios
			.post('https://afternoon-eyrie-83076.herokuapp.com/api/email', message)
			.then(res => {
				if (res.status === 200) {
					this.props.history.push('/success');
				}
			})
			.catch(err => {
				if (err.response) {
					this.setState({ pending: false, errors: err.response.data });
				}
			});
	}

	render() {
		////////////////////////////////////////////////////////
		////     //        //  ///  //  ///////       //     ///
		///  /////////  //////  /  ///  ///////  //////  ///////
		////    //////  ///////  /////  ///////     ////    ////
		///////  /////  ///////  /////  ///////  //////////  ///
		///     //////  ///////  /////       //       //     ///
		////////////////////////////////////////////////////////

		const breakpoints = [580];

		const mq = breakpoints.map(bp => {
			return `@media only screen and (min-width: ${bp}px)`;
		});

		const component = css({
			width: '100%'
		});

		const input = css({
			borderRadius: '3px',
			boxSizing: 'border-box',
			resize: 'none',
			padding: '10px 10px',
			color: _grey,
			backgroundColor: 'rgba(0, 0, 0, 0.2)',
			fontSize: '14px',
			':focus': {
				// border: `1px solid ${_light}`,
				outlineColor: _light
			}
		});

		const block = css({
			display: 'block',
			width: '100%',
			margin: '14px 0'
		});

		const inline = css({
			display: 'inline-block',
			width: '100%',
			margin: '0 0 14px 0',
			[mq[0]]: {
				margin: '0',
				width: 'calc(50% - 7px)'
			}
		});

		const inlineRight = css({
			[mq[0]]: {
				margin: '0 0 14px 14px'
			}
		});

		const submit = css({
			border: 'none',
			display: !this.state.success ? 'inline-block' : 'none',
			width: '33%',
			float: 'right',
			marginTop: '14px',
			color: _grey,
			backgroundColor: _shadow,
			cursor: 'pointer',
			transition: 'all 0.3s ease-in-out',
			':hover': {
				color: 'white',
				backgroundColor: _light
			},
			':focus': {
				outline: 'none',
				color: 'white',
				backgroundColor: _light
			}
		});

		const subject = css({
			border: !this.state.errors.subject ? 'none' : `1px solid ${_error}`
		});

		const text = css({
			border: !this.state.errors.text ? 'none' : `1px solid ${_error}`
		});

		const name = css({
			border: !this.state.errors.name ? 'none' : `1px solid ${_error}`
		});

		const email = css({
			border: !this.state.errors.email ? 'none' : `1px solid ${_error}`
		});

		///////   ///////  ///   //  //////    ///////  ///////
		//    //  //       ////  //  //   //   //       //    //
		///////   /////    // // //  //    //  /////    ///////
		//  //    //       //  ////  //   //   //       //  //
		//   //   ///////  //   ///  //////    ///////  //   //

		return (
			<form className={component} onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Subject"
					className={`${input} ${subject} ${block}`}
					name="subject"
					onChange={this.handleChange}
				/>
				<textarea
					name="text"
					placeholder="Message"
					className={`${input} ${text} ${block}`}
					rows="8"
					onChange={this.handleChange}
				/>
				<input
					type="text"
					placeholder="Name"
					name="name"
					className={`${input} ${name} ${inline}`}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className={`${input} ${email} ${inline} ${inlineRight}`}
					onChange={this.handleChange}
				/>
				<input
					type="submit"
					value="Send"
					className={`${input} ${submit}`}
					disabled={!this.state.pending ? false : 'disabled'}
				/>
			</form>
		);
	}
}

export default ContactForm;
