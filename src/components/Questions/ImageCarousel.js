import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <button onClick={goToPrevious}>Previous</button>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default ImageCarousel;
