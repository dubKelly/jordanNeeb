import React from 'react';
import { css } from 'emotion';

import Javascript from './images/Javascript';
import Nodejs from './images/Nodejs';
import Passport from './images/Passport';
import Reactjs from './images/Reactjs';
import Jest from './images/Jest';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Stack = props => {
	return (
		<div className={component}>
			<div className={container}>
				<div className={cover} />
				<Reactjs />
			</div>
			<div className={container}>
				<div className={cover} />
				<Javascript />
			</div>
			<div className={container}>
				<div className={cover} />
				<Passport />
			</div>
			<div className={container}>
				<div className={cover} />
				<Nodejs />
			</div>
			<div className={container}>
				<div className={cover} />
				<Jest />
			</div>
			<div className={container}>
				<div className={cover} />
			</div>
			<div className={container}>
				<div className={cover} />
			</div>
			<div className={container}>
				<div className={cover} />
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
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	position: 'absolute',
	width: 'calc(100% - 60px)',
	padding: '0 30px',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)'
});

const container = css({
	position: 'relative',
	padding: '5px'
});

const cover = css({
	position: 'absolute',
	height: '100%',
	width: '100%',
	top: '0',
	left: '0',
	cursor: 'pointer',
	zIndex: '2'
});

export default Stack;
