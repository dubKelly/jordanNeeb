import React from 'react';
import { css } from 'emotion';

import { _dark } from '../../lib/vars';

import Logo from '../Logo';
import Nav from '../Nav';
import Stack from '../Stack';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Resume = props => {
	return (
		<div className={component}>
			<Logo />
			<Nav />
			<Stack />
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
	height: '100vh',
	width: '100%',
	backgroundColor: _dark
});

export default Resume;
