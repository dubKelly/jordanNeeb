import React, { Component } from 'react';
import { css } from 'emotion';

import { _light, _shadow, _grey } from '../lib/vars';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};

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

	handleChange() {}

	handleSubmit() {}

	///////   ///////  ///   //  //////    ///////  ///////
	//    //  //       ////  //  //   //   //       //    //
	///////   /////    // // //  //    //  /////    ///////
	//  //    //       //  ////  //   //   //       //  //
	//   //   ///////  //   ///  //////    ///////  //   //

	render() {
		return (
			<form className={component} onSubmit={this.handleSubmit}>
				<input type="text" className={`${input} ${block}`} name="subject" />
				<textarea name="text" className={`${input} ${block}`} rows="8" />
				<input type="text" name="name" className={`${input} ${inline}`} />
				<input
					type="text"
					name="email"
					className={`${input} ${inline} ${inlineRight}`}
				/>
				<input type="submit" className={`${input} ${submit}`} />
			</form>
		);
	}
}

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
	border: 'none',
	borderRadius: '3px',
	boxSizing: 'border-box',
	resize: 'none',
	padding: '10px 10px',
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
	display: 'inline-block',
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
	}
});

export default ContactForm;
