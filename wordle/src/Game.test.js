import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders game', () => {
  render(<Game />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
