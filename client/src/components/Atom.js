import React from 'react';
import { css } from 'emotion';

import { _grey } from '../lib/vars';

import Back from './Back';
import PrintableLink from './PrintableLink';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Atom = props => {
	return (
		<div className={component}>
			<div className={container}>
				<p className={p}>Umm...</p>
			</div>
			<Back />
			<PrintableLink />
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

const container = css({
	position: 'absolute',
	top: '50%',
	width: '100%',
	transform: 'translateY(-50%)',
	textAlign: 'center'
});

const p = css({
	color: _grey,
	fontSize: '14px'
});

export default Atom;
