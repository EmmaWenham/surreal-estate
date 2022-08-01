import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../tests/components/Alert";

describe("Alert", () => {
  test("displays an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    const alert = asFragment();

    expect(getByText(/Error/).toBeContent).toBe("Error!");
    expect(alert).toMatchSnapshot();
  });

  test("displays a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!!" success />
    );
    const alert = asFragment();

    expect(getByText(/Success/).textContent).toBe("Success!!!!");
    expect(alert).toMatchSnapshot();
  });

  test("does not render an error or success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    
    expect(alert).toMatchSnapshot();
  });
});
