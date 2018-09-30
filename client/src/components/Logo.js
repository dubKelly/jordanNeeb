import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import { _light } from '../lib/vars';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Logo = props => {
	return (
		<div className={component}>
			<Link to="/">
				<svg
					className={svg}
					height="85px"
					id="Layer_1"
					version="1.1"
					viewBox="0 0 85 85"
					width="85px"
				>
					<g>
						<g>
							<line
								className={line}
								fill="none"
								stroke="#394553"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="2.5"
								x1="22.666"
								x2="19.888"
								y1="37.481"
								y2="44.945"
							/>
							<line
								className={line}
								fill="none"
								stroke="#394553"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="2.5"
								x1="27.085"
								x2="25.382"
								y1="38.636"
								y2="43.217"
							/>
						</g>
						<g>
							<line
								className={line}
								fill="none"
								stroke="#394553"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="2.5"
								x1="64.235"
								x2="61.456"
								y1="37.481"
								y2="44.945"
							/>
							<line
								className={line}
								fill="none"
								stroke="#394553"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="2.5"
								x1="68.655"
								x2="66.952"
								y1="38.636"
								y2="43.217"
							/>
						</g>
					</g>
					<g>
						<path
							className={hide}
							d="M11.341,52.773   l-4.072,3.414c-1.383,1.158-3.443,0.978-4.602-0.406l0,0c-1.159-1.381-0.979-3.44,0.406-4.6l1.287-1.088"
							fill="none"
							stroke="#394553"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="2.5"
						/>
						<path
							className={hide}
							d="M73.674,52.773   l4.071,3.414c1.384,1.158,3.445,0.978,4.603-0.406l0,0c1.159-1.381,0.847-3.576-0.539-4.733l-1.151-0.952"
							fill="none"
							stroke="#394553"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="2.5"
						/>
					</g>
					<path
						className={path}
						d="M79.192,28.821c0,0-10.887-0.958-16.873-0.74  c0,0-8.164,0.087-13.172,2.264c0,0-3.619,1.524-6.667,1.524c-3.049,0-6.667-1.524-6.667-1.524  c-5.008-2.177-13.172-2.264-13.172-2.264c-5.986-0.218-16.873,0.74-16.873,0.74c-4.574,0.326-4.119,1.304-4.091,1.898  c0.037,0.814,0.391,3.806,0.391,3.806c0,1.524,2.83,1.416,2.83,1.416s0.597-0.099,0.653,2.047c0,0,0.87,11.081,5.224,14.456  c0,0,2.449,2.461,9.58,2.461c0,0,7.838,0.533,12.52-4.42c0,0,5.504-6.193,6.858-12.736c0,0,0.455-1.227,2.748-1.227  c2.294,0,2.749,1.227,2.749,1.227c1.354,6.543,6.857,12.736,6.857,12.736c4.682,4.953,12.52,4.42,12.52,4.42  c7.131,0,9.58-2.461,9.58-2.461c4.354-3.375,5.224-14.456,5.224-14.456c0.056-2.146,0.653-2.047,0.653-2.047s2.83,0.108,2.83-1.416  c0,0,0.354-2.992,0.391-3.806C83.312,30.125,83.767,29.147,79.192,28.821z"
						fill="none"
						stroke="#394553"
						strokeWidth="2.5"
					/>
					<g>
						<path
							className={path}
							d="M52.043,36.928c0,0,0-3.033,5.56-3.631c0,0,11.594-1.081,14.06,0.545   c0,0,2.31,1.154,1.991,4.197c0,0-0.155,8.234-2.368,10.177c0,0-1.302,1.681-6.442,1.89c0,0-6.677,0.394-11.06-5.877   C53.03,43.151,51.465,41.502,52.043,36.928z"
							fill="none"
							stroke="#394553"
							strokeWidth="2.5"
						/>
						<path
							className={path}
							d="M31.178,44.229c-4.383,6.271-11.06,5.877-11.06,5.877   c-5.141-0.209-6.442-1.89-6.442-1.89c-2.213-1.942-2.368-10.177-2.368-10.177c-0.318-3.043,1.991-4.197,1.991-4.197   c2.466-1.626,14.06-0.545,14.06-0.545c5.56,0.598,5.56,3.631,5.56,3.631C33.497,41.502,31.931,43.151,31.178,44.229z"
							fill="none"
							stroke="#394553"
							strokeWidth="2.5"
						/>
					</g>
				</svg>
			</Link>
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

// :hover styles in ../index.css

const breakpoints = [400];

const mq = breakpoints.map(bp => {
	return `@media only screen and (min-width: ${bp}px)`;
});

const component = css({
	position: 'absolute',
	top: '0',
	left: '30px',
	cursor: 'pointer',
	zIndex: '4',
	[mq[0]]: {
		top: '5px',
		left: '35px'
	}
});

const svg = css({
	height: '60px',
	width: '60px'
});

const line = css({
	stroke: 'white'
});

const path = css({
	stroke: _light
});

const hide = css({
	stroke: 'transparent'
});

export default Logo;
