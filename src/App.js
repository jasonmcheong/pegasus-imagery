// TODO: Before transfering build index to server. Make sure that the file paths are correct ie. /static/ vs static/

import React, { Component } from 'react';
import './App.css';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Careers from './components/Careers';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Services />
				<Gallery />
				<About />
				<Careers />
			</div>
		);
	}
}

export default App;
