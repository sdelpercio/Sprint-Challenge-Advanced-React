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
const StyledHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const StyledButton = styled.button`
	background-color: #75e6da;
	padding: 10px 20px;
	border: none;
	border-radius: 3px;

	&:hover {
		color: #75e6da;
		background-color: #189ab4;
	}
`;

const Header = () => {
	const [goal, setGoal] = useGOAL(0);

	return (
		<StyledHeader>
			<h1>Women's Football Statistics</h1>
			<StyledCanvas data-testid='goal-confetti' id='goal-confetti' />
			<StyledButton onClick={() => setGoal(goal + 1)}>
				GOAAAAAAAAALLLLLLLLLL
			</StyledButton>
			<h1># of GOALS: {goal}</h1>
		</StyledHeader>
	);
};
export default Header;
