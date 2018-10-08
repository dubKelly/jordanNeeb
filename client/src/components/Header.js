import React from 'react';
import { css } from 'emotion';

import { _grey, _success } from '../lib/vars';

const Header = props => {
	////////////////////////////////////////////////////////
	////     //        //  ///  //  ///////       //     ///
	///  /////////  //////  /  ///  ///////  //////  ///////
	////    //////  ///////  /////  ///////     ////    ////
	///////  /////  ///////  /////  ///////  //////////  ///
	///     //////  ///////  /////       //       //     ///
	////////////////////////////////////////////////////////

	const component = css({
		fontSize: '18px',
		textTransform: 'uppercase',
		textAlign: 'center',
		letterSpacing: '5px',
		fontWeight: '300',
		color: !props.success ? _grey : _success,
		margin: '0 0 30px 0',
		'@media only screen and (min-height: 660px)': {
			margin: '0 0 60px 0'
		}
	});

	///////   ///////  ///   //  //////    ///////  ///////
	//    //  //       ////  //  //   //   //       //    //
	///////   /////    // // //  //    //  /////    ///////
	//  //    //       //  ////  //   //   //       //  //
	//   //   ///////  //   ///  //////    ///////  //   //

	return <h2 className={component}>{props.text}</h2>;
};

export default Header;
