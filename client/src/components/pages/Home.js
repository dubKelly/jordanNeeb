import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css } from 'emotion';

import { _dark } from '../../lib/vars';

import Nav from '../Nav';
import Landing from './Landing';
import Resume from './Resume';
import Contact from './Contact';
import Success from './Success';
import NoMatch from './NoMatch';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Home = props => {
	return (
		<div className={component}>
			<Nav />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/resume" component={Resume} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/success" component={Success} />
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
	height: '100vh',
	width: '100%',
	minHeight: '530px',
	backgroundColor: _dark
});

export default Home;
