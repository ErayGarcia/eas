// StarRating.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else {
      stars.push(<FaStar key={i} color="#e4e5e9" />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;
