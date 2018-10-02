import React from 'react';
import { css } from 'emotion';

import { _grey } from '../lib/vars';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Header = props => {
	return <h2 className={component}>{props.text}</h2>;
};

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
	fontWeight: '200',
	color: _grey,
	margin: '30px 0',
	'@media only screen and (min-height: 660px)': {
		margin: '60px 0'
	}
});

export default Header;
