import React from 'react';
// import { Link } from 'react-router-dom';
import { css } from 'emotion';
import shortid from 'shortid';

import ResumeFooter from './ResumeFooter';

import Atom from './images/Atom';
import Electron from './images/Electron';
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

///////////////////////////////////////////////////////////
////     ///  ///  ///     //        ///     ///   //   ///
///  ///  //  ///  //  /////////  /////  ///  //        ///
///  ///////  ///  ///    //////  /////  ///  //  /  /  ///
///  ///  //  ///  //////  /////  /////  ///  //  ////  ///
////     ////     ///     //////  //////     ///  ////  ///
///////////////////////////////////////////////////////////

let logos = [
	<Atom />,
	<Electron />,
	<Emmet />,
	<Git />,
	<Gulp />,
	<Heroku />,
	<Html />,
	<Javascript />,
	<Jest />,
	<MongoDB />,
	<Nodejs />,
	<Passport />,
	<Reactjs />,
	<Redux />,
	<Sass />,
	<Webpack />
];

const shuffle = logos => {
	let currentIndex = logos.length,
		temporaryValue,
		randomIndex;

	while (currentIndex !== 0) {
		// Pick remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// Swap with currentIndex
		temporaryValue = logos[currentIndex];
		logos[currentIndex] = logos[randomIndex];
		logos[randomIndex] = temporaryValue;
	}

	return logos;
};

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Stack = props => {
	logos = shuffle(logos);

	return (
		<div className={component}>
			<div className={iconContainer}>
				{logos.map((obj, i) => {
					// const path = logos[i].type.name.toLowerCase();

					return (
						<div key={shortid.generate()} className={svgContainer}>
							{logos[i]}
						</div>
					);
				})}
			</div>
			<ResumeFooter />
		</div>
	);
};
// <Link to={`/resume/${path}`} className={cover} />

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

const iconContainer = css({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	position: 'absolute',
	width: 'calc(100% - 60px)',
	padding: '0 30px',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: '480px'
});

const svgContainer = css({
	position: 'relative',
	padding: '5px'
});

// const cover = css({
// 	position: 'absolute',
// 	height: '100%',
// 	width: '100%',
// 	top: '0',
// 	left: '0',
// 	cursor: 'pointer',
// 	zIndex: '2'
// });

export default Stack;
