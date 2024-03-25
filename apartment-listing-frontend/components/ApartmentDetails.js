import React from 'react';

const ApartmentDetails = ({ apartment }) => {
  return (
    <div>
      <h1>Apartment Details</h1>
      <p>Name: {apartment.name}</p>
      <p>Description: {apartment.description}</p>
      <p>Price: {apartment.price}</p>
      <p>Location: {apartment.location}</p>
    </div>
  );
};

export default ApartmentDetails;
