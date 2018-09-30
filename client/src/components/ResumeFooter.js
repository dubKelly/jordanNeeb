import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import { _light } from '../lib/vars';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const ResumeFooter = props => {
	return (
		<div className={component}>
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

const component = css({});

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

export default ResumeFooter;
