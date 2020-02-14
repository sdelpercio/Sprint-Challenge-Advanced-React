import { useState, useEffect } from 'react';
import ConfettiGenerator from 'confetti-js';

export function useGOAL() {
	const [goal, setGoal] = useState(0);

	useEffect(() => {
		const confettiSettings = { target: 'goal-confetti' };
		const confetti = new ConfettiGenerator(confettiSettings);

		confetti.render();
		setTimeout(() => {
			confetti.clear();
		}, 2000);
	}, [goal]);

	return [goal, setGoal];
}
