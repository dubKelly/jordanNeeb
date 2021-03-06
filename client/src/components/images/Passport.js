import React from 'react';
import { css } from 'emotion';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Passport = props => {
	return (
		<svg
			className={svg}
			width="2000"
			height="2500"
			viewBox="0 0 256 320"
			preserveAspectRatio="xMinYMin meet"
		>
			<path
				d="M128 0C57.28 0 0 57.28 0 128h64c0-35.328 28.672-64 64-64V0z"
				fill="#D6FF00"
			/>
			<path
				d="M256 128C256 57.28 198.72 0 128 0v64c35.328 0 64 28.672 64 64h64z"
				fill="#34E27A"
			/>
			<path
				d="M128 256c70.72 0 128-57.28 128-128h-64c0 35.328-28.672 64-64 64v64z"
				fill="#00B9F1"
			/>
			<path d="M64 256V128H0v192h128v-64H64z" fill="#FFF" />
		</svg>
	);
};

////////////////////////////////////////////////////////
////     //        //  ///  //  ///////       //     ///
///  /////////  //////  /  ///  ///////  //////  ///////
////    //////  ///////  /////  ///////     ////    ////
///////  /////  ///////  /////  ///////  //////////  ///
///     //////  ///////  /////       //       //     ///
////////////////////////////////////////////////////////

const svg = css({
	height: '45px',
	width: '45px',
	'@media only screen and (min-width: 570px)': {
		height: '60px',
		width: '60px'
	}
});

export default Passport;
