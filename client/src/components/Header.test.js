import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders text and button in header', () => {
	// arrange
	const { getByText } = render(<Header />);

	getByText(/women's football statistics/i);
	getByText(/# of goals:/i);
	getByText(/GOAAAAAAAAALLLLLLLLLL/i);
});

test('is button clickable', () => {
	const { getByText } = render(<Header />);
	const goalButton = getByText(/GOAAAAAAAAALLLLLLLLLL/i);

	fireEvent.click(goalButton);
});

test('does confetti fall', () => {
	const { getByText, getByTestId } = render(<Header />);
	const goalButton = getByText(/GOAAAAAAAAALLLLLLLLLL/i);
	const canvas = getByTestId(<Header />, 'goal-confetti');

	fireEvent.click(goalButton);

	expect(canvas).toBeInDocument();
});
