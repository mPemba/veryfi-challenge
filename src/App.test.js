import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders a header with the text "Receipt Analyzer"', () => {
  render(<App />);
  const header = screen.getByText(/Receipt Analyzer/i);
  expect(header).toBeInTheDocument();
});

test('renders a button with the text "Upload Receipt"', () => {
  render(<App />);
  const button = screen.getByText(/Upload Receipt/i);
  expect(button).toBeInTheDocument();
});
