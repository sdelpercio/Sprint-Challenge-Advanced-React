import React from 'react';
import Header from './components/Header';
import PlayerCards from './components/PlayerCards';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	}

	render() {
		return (
			<div>
				<Header />
				<PlayerCards />
			</div>
		);
	}
}

export default App;
