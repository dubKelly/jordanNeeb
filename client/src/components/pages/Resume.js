import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css } from 'emotion';

import Download from '../Download';
import Stack from '../Stack';
import Timeline from '../Timeline';

import Atom from '../Atom';
import Emmet from '../Emmet';
import Git from '../Git';
import Gulp from '../Gulp';
import Heroku from '../Heroku';
import Html from '../Html';
import Javascript from '../Javascript';
import Jest from '../Jest';
import MongoDB from '../MongoDB';
import Nodejs from '../Nodejs';
import Passport from '../Passport';
import Reactjs from '../Reactjs';
import Redux from '../Redux';
import Sass from '../Sass';
import Webpack from '../Webpack';
import NoMatch from './NoMatch';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Resume = props => {
	return (
		<div className={component}>
			<Switch>
				<Route exact path="/resume" component={Stack} />
				<Route exact path="/resume/download" component={Download} />
				<Route exact path="/resume/atom" component={Atom} />
				<Route exact path="/resume/emmet" component={Emmet} />
				<Route exact path="/resume/git" component={Git} />
				<Route exact path="/resume/gulp" component={Gulp} />
				<Route exact path="/resume/heroku" component={Heroku} />
				<Route exact path="/resume/html" component={Html} />
				<Route exact path="/resume/javascript" component={Javascript} />
				<Route exact path="/resume/jest" component={Jest} />
				<Route exact path="/resume/mongodb" component={MongoDB} />
				<Route exact path="/resume/nodejs" component={Nodejs} />
				<Route exact path="/resume/passport" component={Passport} />
				<Route exact path="/resume/reactjs" component={Reactjs} />
				<Route exact path="/resume/redux" component={Redux} />
				<Route exact path="/resume/sass" component={Sass} />
				<Route exact path="/resume/timeline" component={Timeline} />
				<Route exact path="/resume/webpack" component={Webpack} />
				<Route path="*" component={NoMatch} />
			</Switch>
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
	minHeight: '530px'
});

export default Resume;
