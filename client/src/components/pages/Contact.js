import React from 'react';
import { css } from 'emotion';

import Header from '../Header';
import ContactForm from '../ContactForm';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Contact = props => {
	return (
		<div className={component}>
			<div className={container}>
				<Header text="Hit Me Up" />
				<ContactForm />
			</div>
		</div>
	);
};

////////////////////////////////////////////////////////
////     //        //  ///  //  ///////       //     ///
///  /////////  //////  /  ///  ///////  //////  ///////
////    //////  ///////  /////  ///////     ////    ////
///////  /////  ///////  /////  ///////  //////////  ///
///     //////  ///////  /////       //       //     ///
////////////////////////////////////////////////////////

const component = css({
	position: 'absolute',
	height: '100vh',
	width: '100%',
	minHeight: '530px',
	top: '0',
	left: '0'
});

const container = css({
	position: 'absolute',
	top: '50%',
	left: '50%',
	width: '80%',
	maxWidth: '480px',
	transform: 'translate(-50%, -50%)'
});

export default Contact;
