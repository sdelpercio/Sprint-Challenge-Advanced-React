import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import PlayerCards from './components/PlayerCards';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/players')
			.then(res => {
				this.setState({ players: res.data });
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<Header />
				<PlayerCards players={this.state.players} />
			</div>
		);
	}
}

export default App;
