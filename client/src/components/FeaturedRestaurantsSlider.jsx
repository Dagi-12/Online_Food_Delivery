import React, { useEffect, useState } from 'react';

const FeaturedRestaurantsSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageData = [
      { image: require('../assets/images/hot.jpg'), name: 'Featured Restaurant 1' },
      { image: require('../assets/images/hot2.jpg'), name: 'Featured Restaurant 2' },
      { image: require('../assets/images/hot.jpg'), name: 'Featured Restaurant 3' },
      { image: require('../assets/images/hot2.jpg'), name: 'Featured Restaurant 3' },
      
    ];
    setImages(imageData);
  }, []);

  useEffect(() => {
    const scrollContainer = document.getElementById('image-scroll-container');

    if (scrollContainer) {
      const slideWidth = 250;
      const slideCount = images.length;
      const containerWidth = slideWidth * slideCount;

      scrollContainer.style.width = `${containerWidth}px`;
      scrollContainer.style.transform = 'translateX(0%)';
      scrollContainer.style.transition = 'transform 1s ease-in-out';

      let slideIndex = 0;
      let intervalId;

      const slide = () => {
        scrollContainer.style.transform = `translateX(-${slideIndex * slideWidth}px`;

        slideIndex = (slideIndex + 1) % slideCount;
      };

      intervalId = setInterval(slide, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [images]);

  return (<div className="bg-gradient-to-r from-blue-300 to-amber-100 flex justify-center items-center">


      <div className="h-200px m-auto overflow-hidden relative w-auto">
        <ul id="image-scroll-container" className="flex">
          {images.map((image, index) => (
            <li key={index} className="w-300px rounded-2xl">
              <img src={image.image} alt={image.name} className="w-full h-full object-cover rounded-lg" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedRestaurantsSlider;
