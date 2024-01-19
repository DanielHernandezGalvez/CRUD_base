import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="spinner-container flex justify-center items-center h-screen">
      <ClipLoader size={55} color="#6a5548" />
    </div>
  );
};

export default Spinner;