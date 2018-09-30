import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import shortid from 'shortid';

import { _light } from '../lib/vars';

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

///////////////////////////////////////////////////////////
////     ///  ///  ///     //        ///     ///   //   ///
///  ///  //  ///  //  /////////  /////  ///  //        ///
///  ///////  ///  ///    //////  /////  ///  //  /  /  ///
///  ///  //  ///  //////  /////  /////  ///  //  ////  ///
////     ////     ///     //////  //////     ///  ////  ///
///////////////////////////////////////////////////////////

let logos = [
	<Atom />,
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
					const path = logos[i].type.name.toLowerCase();

					return (
						<div key={shortid.generate()} className={svgContainer}>
							<Link to={`/resume/${path}`} className={cover} />
							{logos[i]}
						</div>
					);
				})}
			</div>
			<Link to="/resume/printable" className={printableLink}>
				Get On With It
			</Link>
			<div
				className={css`
					${container} ${tileViewContainer};
				`}
			>
				<Link to="/resume" className={toggleLink} />
				<span
					className={css`
						${tile} ${tile01};
					`}
				/>
				<span
					className={css`
						${tile} ${tile02};
					`}
				/>
				<span
					className={css`
						${tile} ${tile03};
					`}
				/>
				<span
					className={css`
						${tile} ${tile04};
					`}
				/>
				<span
					className={css`
						${tile} ${tile05};
					`}
				/>
				<span
					className={css`
						${tile} ${tile06};
					`}
				/>
				<span
					className={css`
						${tile} ${tile07};
					`}
				/>
				<span
					className={css`
						${tile} ${tile08};
					`}
				/>
				<span
					className={css`
						${tile} ${tile09};
					`}
				/>
			</div>
			<div
				className={css`
					${container} ${timelineViewContainer};
				`}
			>
				<Link to="/resume/timeline" className={toggleLink} />
				<span
					className={css`
						${line} ${top};
					`}
				/>
				<span
					className={css`
						${line} ${middle};
					`}
				/>
				<span
					className={css`
						${line} ${bottom};
					`}
				/>
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

const cover = css({
	position: 'absolute',
	height: '100%',
	width: '100%',
	top: '0',
	left: '0',
	cursor: 'pointer',
	zIndex: '2'
});

const printableLink = css({
	position: 'absolute',
	bottom: '25px',
	right: '30px',
	textDecoration: 'none',
	textTransform: 'uppercase',
	fontSize: '10px',
	letterSpacing: '3px',
	color: _light,
	transition: 'color 0.3s ease-in-out',
	':hover': {
		color: 'white'
	}
});

const container = css({
	position: 'absolute',
	height: '20px',
	width: '20px',
	padding: '7px'
});

const tileViewContainer = css({
	bottom: '60px',
	left: '30px'
});

const timelineViewContainer = css({
	bottom: '20px',
	left: '30px'
});

const toggleLink = css({
	position: 'absolute',
	top: '0',
	left: '0',
	height: '100%',
	width: '100%',
	zIndex: '3'
});

const tile = css({
	position: 'absolute',
	content: '""',
	height: '4px',
	width: '4px',
	backgroundColor: _light,
	borderRadius: '4px'
});

const tile01 = css({
	top: '7px',
	left: '7px'
});

const tile02 = css({
	top: '7px',
	left: '15px'
});

const tile03 = css({
	top: '7px',
	left: '23px'
});

const tile04 = css({
	top: '15px',
	left: '7px'
});

const tile05 = css({
	top: '15px',
	left: '15px'
});

const tile06 = css({
	top: '15px',
	left: '23px'
});

const tile07 = css({
	top: '23px',
	left: '7px'
});

const tile08 = css({
	top: '23px',
	left: '15px'
});

const tile09 = css({
	top: '23px',
	left: '23px'
});

const line = css({
	position: 'absolute',
	content: '""',
	height: '3px',
	backgroundColor: _light,
	borderRadius: '2px'
});

const top = css({
	top: '7px',
	left: '7px',
	width: '14px'
});

const middle = css({
	top: '15px',
	left: '11px',
	width: '16px'
});

const bottom = css({
	top: '23px',
	left: '9px',
	width: '10px'
});

export default Stack;
