import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";
import Alert from "./Alert";

const initialState = {
  properties: [],
};

const Properties = () => {
  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListings`)
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({
          message: "Property not found, try again!",
          isSuccess: false,
        })
      );
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "Server error, Please try again.",
          isSuccess: false,
        });
      });
  }, [search]);

  return (
    <div>
      <div>Properties Page</div>
      <div className="propertyGrid">
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property) => (
          <PropertyCard {...property} key={property.price} />
        ))}
      </div>
    </div>
  );
};
export default Properties;
