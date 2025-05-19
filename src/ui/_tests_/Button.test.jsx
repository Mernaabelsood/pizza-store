import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../Button';

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test('renders button with children text', () => {
  render(<Button type="primary">Click Me</Button>);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();

  render(<Button type="primary" onClick={handleClick}>Click Me</Button>);

  fireEvent.click(screen.getByText('Click Me'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders a link when "to" prop is provided', () => {
  renderWithRouter(<Button to="/about" type="primary">Go to About</Button>);
  
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/about');
  expect(link).toHaveTextContent('Go to About');
});
test('does not call onClick when button is disabled', () => {
  const handleClick = jest.fn();

  render(<Button type="primary" disabled onClick={handleClick}>Don't Click</Button>);

  const button = screen.getByText("Don't Click");
  expect(button).toBeDisabled();

  fireEvent.click(button);
  expect(handleClick).not.toHaveBeenCalled();
});   

