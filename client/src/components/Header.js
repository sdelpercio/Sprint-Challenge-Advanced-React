import React from 'react';
import styled from 'styled-components';
import { useGOAL } from '../hooks/useGOAL';

const StyledCanvas = styled.canvas`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
`;

const Header = () => {
	const [goal, setGoal] = useGOAL(0);

	return (
		<div>
			<h1>Women's Football Statistics</h1>
			<StyledCanvas id='goal-confetti' />
			<button onClick={() => setGoal(goal + 1)}>GOAAAAAAAAALLLLLLLLLL</button>
			<h1># of GOALS: {goal}</h1>
		</div>
	);
};
export default Header;
