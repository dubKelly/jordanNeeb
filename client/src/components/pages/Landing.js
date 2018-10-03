import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import { _light, _grey } from '../../lib/vars';

import Header from '../Header';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Landing = props => {
	return (
		<div className={component}>
			<div className={container}>
				<Header text="Hey There" />
				<p className={p}>
					Thanks for coming to my site. Check out my{' '}
					<Link to="/resume" className={link}>
						resume
					</Link>{' '}
					and feel free to{' '}
					<Link to="/contact" className={link}>
						give me a shout
					</Link>
					.
				</p>
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
	top: '0',
	left: '0',
	minHeight: '320px'
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

const link = css({
	color: _light,
	textDecoration: 'none'
});

export default Landing;
