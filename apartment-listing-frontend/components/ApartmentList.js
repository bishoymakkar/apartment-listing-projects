import React, { useState } from 'react';
import ApartmentCard from './ApartmentCard';
import styles from './styles/ApartmentList.module.css'; // Import CSS file

const ITEMS_PER_PAGE = 5; // Number of apartments per page

const ApartmentList = ({ apartments }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the apartments array to display only the apartments for the current page
  const displayedApartments = apartments.slice(startIndex, endIndex);

  const totalPages = Math.ceil(apartments.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div>
      <h1>Apartment List</h1>
      <div className={styles.apartmentList}>
        {displayedApartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            disabled={currentPage === pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === currentPage ? styles.activePage : styles.defaultPage}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ApartmentList;
