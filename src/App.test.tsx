import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render the Blue button', () => {
  render(<App />);
  const linkElement = screen.getByText("Blue");
  expect(linkElement).toBeInTheDocument();
});
