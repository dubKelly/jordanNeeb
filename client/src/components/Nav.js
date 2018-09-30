import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import { _light } from '../lib/vars';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Nav = props => {
	return (
		<div className={component}>
			<ul className={ul}>
				<li className={li}>
					<Link className={link} to="/resume">
						Resume
					</Link>
				</li>
				<li className={li}>
					<Link className={link} to="/contact">
						Contact
					</Link>
				</li>
			</ul>
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

const breakpoints = [400];

const mq = breakpoints.map(bp => {
	return `@media only screen and (min-width: ${bp}px)`;
});

const component = css({
	width: '100%'
});

const ul = css({
	margin: '0',
	padding: '0',
	textAlign: 'right'
});

const li = css({
	display: 'inline-block',
	margin: '20px 15px 0 0',
	textTransform: 'uppercase',
	fontSize: '12px',
	letterSpacing: '3px',
	[mq[0]]: {
		margin: '23px 30px 0 0'
	}
});

const link = css({
	padding: '5px',
	color: _light,
	textDecoration: 'none',
	cursor: 'pointer',
	transition: 'color 0.3s ease-in-out',
	':hover': {
		color: 'white'
	}
});

export default Nav;
