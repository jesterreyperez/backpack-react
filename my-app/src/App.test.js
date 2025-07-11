// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Flight Schedule heading", () => {
  render(<App />);
  const heading = screen.getByText(/flight schedule/i);
  expect(heading).toBeInTheDocument();
});
