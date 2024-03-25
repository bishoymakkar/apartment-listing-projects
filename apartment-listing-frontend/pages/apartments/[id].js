import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ApartmentDetails from '../../components/ApartmentDetails';

const ApartmentDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    if (!id) return;

    // Fetch apartment details based on ID from backend API
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    fetch(`${backendUrl}/apartments/${id}`)
      .then(response => response.json())
      .then(data => setApartment(data))
      .catch(error => console.error('Error fetching apartment details:', error));
  }, [id]);

  return (
    <div>
      {apartment ? <ApartmentDetails apartment={apartment} /> : <p>Loading...</p>}
    </div>
  );
};

export default ApartmentDetailsPage;
