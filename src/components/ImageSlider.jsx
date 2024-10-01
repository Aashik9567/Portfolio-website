import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: 'https://i.ibb.co/qCkd9jS/img1.jpg', name: 'Switzerland' },
    { url: 'https://i.ibb.co/jrRb11q/img2.jpg', name: 'Finland' },
    { url: 'https://i.ibb.co/NSwVv8D/img3.jpg', name: 'Iceland' },
    { url: 'https://i.ibb.co/Bq4Q0M8/img4.jpg', name: 'Australia' },
    { url: 'https://i.ibb.co/jTQfmTq/img5.jpg', name: 'Netherlands' },
    { url: 'https://i.ibb.co/RNkk6L0/img6.jpg', name: 'Ireland' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/1920/1080')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-30">
        <div className="container mx-auto h-full flex flex-col justify-center">
          {/* Text Section */}
          <div className="text-white mb-8 ml-4">
            <h1 className="text-5xl font-bold uppercase">{images[currentIndex].name}</h1>
            <p className="mt-2 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold hover:bg-opacity-90 transition-colors">
              See More
            </button>
          </div>

          {/* Image Section */}
          <div className="relative h-64 flex items-center justify-center">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`w-40 h-56 rounded-lg overflow-hidden transition-all duration-300 mx-2 ${index === currentIndex ? 'scale-110 shadow-xl' : 'scale-90 opacity-60'}`}
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Previous and Next buttons */}
      <div className="absolute bottom-4 left-4 flex space-x-2">
        <button
          className="w-8 h-8 rounded-full bg-white bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-75 transition-colors"
          onClick={handlePrev}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="w-8 h-8 rounded-full bg-white bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-75 transition-colors"
          onClick={handleNext}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
