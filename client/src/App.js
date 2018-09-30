import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Home} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/contact" component={Contact} />
				</div>
			</Router>
		);
	}
}

export default App;
