import React from 'react';
import { css } from 'emotion';

import { _grey } from '../../lib/vars';

import Header from '../Header';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const NoMatch = props => {
	return (
		<div className={component}>
			<div className={container}>
				<Header text="404" />
				<p className={p}>Page not found.</p>
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

const p = css({
	fontSize: '14px',
	letterSpacing: '1px',
	lineHeight: '2',
	textAlign: 'center',
	color: _grey,
	margin: '0'
});

export default NoMatch;
