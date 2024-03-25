import React, { useEffect, useState } from 'react';

import styles from '../styles/ApartmentsPage.module.css';
import ApartmentList from '../../components/ApartmentList';

const ApartmentsPage = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // Fetch apartments data from backend API
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    fetch(`${backendUrl}/apartments`)
      .then(response => response.json())
      .then(data => setApartments(data))
      .catch(error => console.error('Error fetching apartments:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apartment Listing Page</h1>
      <ApartmentList apartments={apartments} />
    </div>
  );
};

export default ApartmentsPage;
