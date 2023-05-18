import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="slider flex flex-col items-center justify-center">
      <div className="slider-image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className="slider-image rounded-lg shadow-lg"
        />
      </div>
      <div className="slider-controls mt-4">
        <button
          className="slider-control-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevImage}
        >
          Prev
        </button>
        <button
          className="slider-control-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleNextImage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
