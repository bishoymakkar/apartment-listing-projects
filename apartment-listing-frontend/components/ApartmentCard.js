import React, { useState } from 'react';
import styles from './styles/ApartmentCard.module.css'; // Import CSS file

const ApartmentCard = ({ apartment }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div onClick={toggleDetails} className={styles.card}>
      <h2>{apartment.name}</h2>
      {showDetails && (
        <div className={styles.details}>
          <p>{apartment.description}</p>
          <p>Price: {apartment.price}</p>
          <p>Location: {apartment.location}</p>
        </div>
      )}
    </div>
  );
};

export default ApartmentCard;
