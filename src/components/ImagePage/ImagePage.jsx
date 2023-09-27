import React from 'react';
import './ImagePage.css'; // Create a CSS file for styling

const ImagePage = () => {
  return (
    <div className="page">
      
      <div className="image-container">
        <img
          src="photoanim.png" // Replace with your image URL
          alt="Image"
          className="hover-image"
        />
      </div>
    </div>
  );
};

export default ImagePage;
