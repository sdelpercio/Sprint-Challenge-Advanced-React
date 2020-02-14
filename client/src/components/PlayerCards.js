import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 0;
	display: flex;
	justify-content: space-evenly;
	align-items: space-evenly;
	flex-wrap: wrap;
`;
const StyledCard = styled.div`
	width: 30%;
	margin: 20px auto;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const PlayerCards = ({ players }) => {
	return (
		<>
			<h2 style={{ textAlign: 'center' }}>
				Most Searched Players During 2019 Women's World Cup
			</h2>
			<StyledDiv>
				{players.map(player => (
					<StyledCard key={player.id}>
						<h3>
							<span>#{player.id + 1} </span>
							{player.name}
						</h3>
						<p>Country: {player.country}</p>
						<p>Amount of Searches: {player.searches}</p>
					</StyledCard>
				))}
			</StyledDiv>
		</>
	);
};
export default PlayerCards;
