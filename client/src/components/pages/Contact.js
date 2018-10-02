import React from 'react';
import { css } from 'emotion';

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
