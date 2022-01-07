import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Can show the title of the text", () => {
  render(<App />);
  const text = screen.getByTestId("title-content");
  expect(text).toHaveTextContent("Final Space Characters");
});

test("Can show the text", () => {
  render(<App />);
  const text = screen.getByTestId("text-content");
  expect(text).toHaveTextContent("You can drag and drop the list below");
});
