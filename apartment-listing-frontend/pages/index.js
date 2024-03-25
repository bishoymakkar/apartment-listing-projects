// pages/index.js
import React from 'react';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';

import AddApartmentForm from '../components/AddApartmentForm';
import styles from './styles/index.module.css'; // Import CSS file

const HomePage = () => {
  return (
    <>
    <ToastContainer />
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Apartment Listing App</h1>
      <div className={styles.button_container}>
        <p>Check out our apartments:</p>
        <Link href="/apartments">
          <button>View Apartments</button>
        </Link>
      </div>
      <hr />
      <div className={styles.form_container}>
        <h2>Add New Apartment</h2>
        <AddApartmentForm />
      </div>
    </div>
    </>
  );
};

export default HomePage;
