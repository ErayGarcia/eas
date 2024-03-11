// NavBar.js
import React from 'react';

const NavBar = ({ handleButtonClick }) => {
  return (
    <nav className="NavBar">
      <button onClick={() => handleButtonClick("home")}>Home</button>
      <button onClick={() => handleButtonClick("services")}>Servicios</button>
      <button onClick={() => handleButtonClick("testimonials")}>Testimonios</button>
      <button onClick={() => handleButtonClick("pricing")}>Planes y Precios</button>
      <button onClick={() => handleButtonClick("contactForm")}>Formulario de Contacto</button>
    </nav>
  );
}

export default NavBar;
