import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

import Homepage from './Homepage';
import Paints from './Paints';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={ Homepage }/>

					<Route path="/(.+)" render={(() => 
						<Nav colour="black" />
					)}/>
					<Route exact path="/paints" component={ Paints }/>
					<Route path="/(.+)" render={(() => 
						<Footer />
					)}/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
