import { render, screen } from '@testing-library/react';
import App from './main-page/app';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ToDo App/i);
  expect(linkElement).toBeInTheDocument();
});
