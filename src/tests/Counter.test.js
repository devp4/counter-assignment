import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterText = screen.getByText('Counter');
  expect(counterText).toBeInTheDocument();
});

test('should render initial count with a value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  fireEvent.click(increment);
  const updatedCount = screen.getByTestId('count');
  expect(updatedCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByText('-');
  fireEvent.click(decrement);
  const updatedCount = screen.getByTestId('count');
  expect(updatedCount).toHaveTextContent('-1');
});
