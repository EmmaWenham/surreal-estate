import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "2 Bedroom Spacious Flat",
    type: "Flat",
    bathrooms: 1,
    bedrooms: 2,
    price: 250000,
    city: "Manchester",
    email: "john.wilson@email.co.uk",
  };

  it("render", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
