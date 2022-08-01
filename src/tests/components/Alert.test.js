import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../tests/components/Alert";

test("displays an error message", () => {
  const { getByText, asFragment } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).toBeContent).toBe("Error!");
});

test("displays a success message", () => {
  const { getByText, asFragment } = render(
    <Alert message="Success!!!!" success />
  );

  expect(getByText(/Success/).textContent).toBe("Success!!!!");
});

test("does not render an error or success message if message props is empty", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();
  expect(alert).toMatchSnapshot();
});
