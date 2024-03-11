import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://www.twitter.com/tuempresa" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  );
}

export default SocialMediaIcons;
