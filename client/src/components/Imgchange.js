import React, { useState, useEffect } from "react";

const Imgchange = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/hp1.jpg", "/images/wt2.jpg", "/images/sm3.jpg"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 1500);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="home">
      <img src={images[currentImageIndex]} alt="Home" />
    </div>
  );
};

export default Imgchange;
