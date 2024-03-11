// Testimonials.js
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      user: 'John Doe',
      review: 'Excelente servicio, estoy muy contento con la conexión a internet.',
      rating: 5
    },
    {
      id: 2,
      user: 'Jane Smith',
      review: '¡Increíble! Nunca había tenido una conexión tan rápida y confiable.',
      rating: 4
    },
    {
      id: 3,
      user: 'David Johnson',
      review: 'Muy satisfecho con el servicio al cliente y la calidad de la conexión.',
      rating: 5
    }
  ];

  return (
    <div className="testimonials">
      <h2>Testimonios de Clientes Satisfechos</h2>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            user={testimonial.user}
            review={testimonial.review}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

