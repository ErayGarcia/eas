// Carrusel.js
import React, { useState, useEffect } from 'react';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

const Carrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % 3); // Cambia el número 3 al número total de imágenes
    }, 3000); // Cambia el tiempo de cambio de slide según sea necesario

    return () => clearInterval(interval);
  }, []); // Agrega nextSlide a la lista de dependencias si es necesario

  const slides = [img1, img2, img3]; // Array con las imágenes

  return (
    <div className="Carousel">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
    </div>
  );
};

export default Carrusel;

