import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

it("renders correct markup"),
  () => {
    render(<App />);
    const linkElement = screen.getByText(/surreal estate/i);
    expect(linkElement).toBeInTheDocument();
  };
