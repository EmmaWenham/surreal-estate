import React from "react";
import PropTypes from "prop-types";
import "../styles/property-card.css";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="property-card">
      <div className="title">{title}</div>
      <div className="type">{type}</div>
      <div className="bathrooms">{bathrooms}</div>
      <div className="bedrooms">{bedrooms}</div>
      <div className="price">{price}</div>
      <div className="city">{city}</div>
      <div className="email">{email}</div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  price: PropTypes.number,
  city: PropTypes.string,
  email: PropTypes.string,
}.isRequired;
