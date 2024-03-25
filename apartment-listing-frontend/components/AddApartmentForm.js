import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/AddApartmentForm.module.css';

const AddApartmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddApartment = async () => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;  
      const response = await fetch(`${backendUrl}/apartments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      console.log('Apartment added:', data);
      toast.success('Apartment added successfully');
      setFormData({
        name: '',
        description: '',
        price: '',
        location: '',
      });
    } catch (error) {
      console.error('Error adding apartment:', error);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.form_container}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      <button onClick={handleAddApartment}>Add New Apartment</button>
    </div>
  );
};

export default AddApartmentForm;
