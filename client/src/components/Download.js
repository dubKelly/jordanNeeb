import React from 'react';
import { css } from 'emotion';

import { _dark, _grey } from '../lib/vars';

import DownloadIcon from './DownloadIcon';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Download = props => {
	return (
		<div className={component}>
			<div className={resumeContainer}>
				<h2 className={name}>Jordan Neeb</h2>
				<h3 className={title}>Full Stack Developer</h3>
				<div className={flexContainer}>
					<div className={address}>
						67 Massey Ave.
						<br />
						Kitchener, ON N2C 1M4
					</div>
					<span className={partition} />
					<div className={contactInfo}>
						1 (226) 505-0446
						<br />
						info@jordanneeb.com
					</div>
				</div>
				<div className={flexContainer}>
					<div className={techContainer}>
						<h3 className={techHeader}>Skills</h3>
						<ul className={techList}>
							<li>
								HTML <span className={grey}>| JSX</span>
							</li>
							<li>
								CSS <span className={grey}>| Emotion.js | Sass</span>
							</li>
							<li>JavaScript | Node.js</li>
							<li>React | Redux</li>
							<li>MongoDB</li>
						</ul>
					</div>
					<div className={techContainer}>
						<h3 className={techHeader}>Tools</h3>
						<ul className={techList}>
							<li>
								Mac <span className={grey}>| Linux</span>
							</li>
							<li>
								Atom <span className={grey}>| Emmet</span>
							</li>
							<li>
								Git <span className={grey}>| Github</span>
							</li>
							<li>
								Webpack <span className={grey}>| Gulp</span>
							</li>
							<li>Jest</li>
							<li>Heroku</li>
						</ul>
					</div>
				</div>
				<div className={section}>
					<h3 className={sectionHeader}>Experience</h3>
					<h4 className={sectionListHeader}>
						N3L Computers
						<br />
						<span
							className={css`
								${grey} ${sectionListHeaderGrey};
							`}
						>
							Current Project
							<br />
							MongoDB / Express.js / React / Node.js
						</span>
					</h4>
					<ul className={sectionList}>
						<li>Custom CMS</li>
						<li>JWT authentication with Passport.js</li>
						<li>Email contact with Nodemailer and SendGrid</li>
						<li>React.js UI with Redux data store</li>
					</ul>
					<h4 className={sectionListHeader}>
						Megan Soo Portfolio
						<br />
						<span
							className={css`
								${grey} ${sectionListHeaderGrey};
							`}
						>
							Lead Designer/Developer
						</span>
					</h4>
					<ul className={sectionList}>
						<li>Created mobile-first layout with Sass</li>
						<li>
							Developed client side functionality with JavaScript and jQuery
						</li>
						<li>
							Email form verification handled with both PHP and client side
							JavaScript
						</li>
					</ul>
					<h4 className={sectionListHeader}>
						goTO Movers Ltd.
						<br />
						<span
							className={css`
								${grey} ${sectionListHeaderGrey};
							`}
						>
							Lead Designer/Developer
						</span>
					</h4>
					<ul className={sectionList}>
						<li>Designed company logo</li>
						<li>
							Provided website and blog content and contributed to the
							development of the company&#8217;s brand and mission statement
						</li>
						<li>
							Designed and developed site using Vanilla JavaScript and CSS
						</li>
					</ul>
				</div>
				<div className={portfolioLinks}>
					<span className={grey}>
						http:&#47;&#47;jordanneeb.com
						<br />
						https:&#47;&#47;github.com/dubKelly
					</span>
				</div>
			</div>
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

const breakpoints = [450, 630];

const mq = breakpoints.map(bp => {
	return `@media only screen and (min-width: ${bp}px)`;
});

const component = css({
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	padding: '90px 0',
	backgroundColor: _dark
});

const resumeContainer = css({
	position: 'relative',
	left: '50%',
	transform: 'translateX(-50%)',
	maxWidth: '720px'
});

const name = css({
	fontSize: '18px',
	textAlign: 'center',
	textTransform: 'uppercase',
	letterSpacing: '3px',
	margin: '0',
	color: 'white',
	[mq[0]]: {
		fontSize: '20px'
	},
	[mq[1]]: {
		fontSize: '24px',
		letterSpacing: '5px'
	}
});

const title = css({
	fontSize: '12px',
	textAlign: 'center',
	letterSpacing: '1px',
	margin: '0 0 30px 0',
	color: _grey,
	[mq[0]]: {
		fontSize: '14px'
	},
	[mq[1]]: {
		fontSize: '18px'
	}
});

const flexContainer = css({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	color: 'white',
	fontSize: '10px',
	[mq[0]]: {
		fontSize: '12px'
	},
	[mq[1]]: {
		fontSize: '14px'
	}
});

const address = css({
	textAlign: 'right',
	color: 'white'
});

const partition = css({
	content: '""',
	height: '28px',
	width: '1px',
	backgroundColor: 'white',
	margin: '0 15px',
	[mq[0]]: {
		height: '32px'
	},
	[mq[1]]: {
		height: '36px'
	}
});

const contactInfo = css({
	color: 'white',
	margin: '0 0 30px 0'
});

const techContainer = css({
	position: 'relative',
	width: '40%',
	padding: '0 0 0 5%',
	color: 'white'
});

const techHeader = css({
	fontSize: '12px',
	textAlign: 'center',
	textTransform: 'uppercase',
	letterSpacing: '3px',
	margin: '0',
	color: 'white',
	[mq[0]]: {
		fontSize: '14px'
	},
	[mq[1]]: {
		fontSize: '18px',
		letterSpacing: '5px'
	}
});

const techList = css({
	listStyle: 'none',
	padding: '0'
});

const grey = css({
	color: _grey
});

const section = css({
	padding: '0 10%'
});

const sectionHeader = css({
	fontSize: '12px',
	textTransform: 'uppercase',
	letterSpacing: '3px',
	margin: '0',
	color: 'white',
	[mq[0]]: {
		fontSize: '14px'
	},
	[mq[1]]: {
		fontSize: '18px',
		letterSpacing: '5px'
	}
});

const sectionListHeader = css({
	fontSize: '10px',
	letterSpacing: '1px',
	margin: '0',
	padding: '15px 0',
	color: 'white',
	[mq[0]]: {
		fontSize: '12px'
	},
	[mq[1]]: {
		fontSize: '14px'
	}
});

const sectionListHeaderGrey = css({
	[mq[1]]: {
		fontSize: '12px'
	}
});

const sectionList = css({
	paddingInlineStart: '30px',
	margin: '0',
	fontSize: '10px',
	color: 'white',
	[mq[0]]: {
		fontSize: '12px'
	},
	[mq[1]]: {
		fontSize: '14px'
	}
});

const portfolioLinks = css({
	padding: '30px',
	fontSize: '10px',
	textAlign: 'right',
	[mq[0]]: {
		fontSize: '12px'
	},
	[mq[1]]: {
		fontSize: '14px'
	}
});

export default Download;
