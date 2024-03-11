// TestimonialCard.js
import React from 'react';
import StarRating from './StarRating';

const TestimonialCard = ({ user, review, rating }) => {
  return (
    <div className="testimonial-card">
      <div className="user">{user}</div>
      <div className="rating">
        <StarRating rating={rating} />
      </div>
      <div className="review">{review}</div>
    </div>
  );
};

export default TestimonialCard;
