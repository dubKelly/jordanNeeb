import React from 'react';
import { css } from 'emotion';

import Atom from './images/Atom';
import Emmet from './images/Emmet';
import Git from './images/Git';
import Gulp from './images/Gulp';
import Heroku from './images/Heroku';
import Html from './images/Html';
import Javascript from './images/Javascript';
import Jest from './images/Jest';
import MongoDB from './images/MongoDB';
import Nodejs from './images/Nodejs';
import Passport from './images/Passport';
import Reactjs from './images/Reactjs';
import Redux from './images/Redux';
import Sass from './images/Sass';
import Webpack from './images/Webpack';

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
				<Atom />
			</div>
			<div className={container}>
				<div className={cover} />
				<Emmet />
			</div>
			<div className={container}>
				<div className={cover} />
				<Git />
			</div>
			<div className={container}>
				<div className={cover} />
				<Gulp />
			</div>
			<div className={container}>
				<div className={cover} />
				<Heroku />
			</div>
			<div className={container}>
				<div className={cover} />
				<Html />
			</div>
			<div className={container}>
				<div className={cover} />
				<MongoDB />
			</div>
			<div className={container}>
				<div className={cover} />
				<Redux />
			</div>
			<div className={container}>
				<div className={cover} />
				<Sass />
			</div>
			<div className={container}>
				<div className={cover} />
				<Webpack />
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
