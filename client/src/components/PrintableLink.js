import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import { _light } from '../lib/vars';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const PrintableLink = props => {
	return (
		<Link to="/resume/printable" className={component}>
			Get On With It
		</Link>
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
	bottom: '20px',
	right: '25px',
	textDecoration: 'none',
	textTransform: 'uppercase',
	fontSize: '10px',
	letterSpacing: '3px',
	padding: '5px',
	color: _light,
	transition: 'color 0.3s ease-in-out',
	':hover': {
		color: 'white'
	}
});

export default PrintableLink;
