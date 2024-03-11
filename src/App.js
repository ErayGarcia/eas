// App.js
import React, { useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Carrusel from './Carrusel';
import Services from './Services';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import ContactForm from './ContactForm';
import Footer from './Footer';
import bannerPago from './img/banner_pago.gif'; // Importa la imagen banner-pago
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header />
      <NavBar handleButtonClick={handleButtonClick} />
      <img src={bannerPago} alt="Banner Pago" className="BannerPago" style={{ maxWidth: '70%', height: 'auto' }} />
      {currentPage === "home" && <Carrusel />}
      {currentPage === "services" && <Services />}
      {currentPage === "testimonials" && <Testimonials />}
      {currentPage === "pricing" && <Pricing />}
      {currentPage === "contactForm" && <ContactForm />}
      <div style={{ marginBottom: '40px' }}></div> {/* Agrega espacio entre el contenido y el pie de página */}
      <Footer />
    </div>
  );
}

export default App;

