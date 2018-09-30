import React from 'react';
import { Route, Link } from 'react-router-dom';
import { css } from 'emotion';

import { _light } from '../../lib/vars';

import Stack from '../Stack';
import Printable from '../Printable';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Resume = props => {
	return (
		<div className={component}>
			<Route exact path="/resume" component={Stack} />
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

export default Resume;
