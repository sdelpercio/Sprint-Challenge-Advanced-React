import React from 'react';

const PlayerCards = ({ players }) => {
	return (
		<div>
			<h2>Most Searched Players During 2019 Women's World Cup</h2>
			{players.map(player => (
				<div key={player.id}>
					<h3>
						<span>#{player.id + 1} </span>
						{player.name}
					</h3>
					<p>Country: {player.country}</p>
					<p>Amount of Searches: {player.searches}</p>
				</div>
			))}
		</div>
	);
};
export default PlayerCards;
