import React from 'react';
import { css } from 'emotion';

import DownloadIcon from './DownloadIcon';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Download = props => {
	return (
		<div className={component}>
			<DownloadIcon />
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
	top: '0',
	left: '0',
	height: '100%',
	width: '100%'
});

export default Download;
