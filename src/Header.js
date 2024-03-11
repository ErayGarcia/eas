// Header.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import titulo from './img/titulo.png'; // Importa el icono de la empresa
import icon from './img/icon.png'; // Importa el icono de la empresa

const Header = () => {
  return (
    <header className="Header">
      <div className="HeaderContent">
        <div className="Logo">
        <img src={icon} alt="Icono de la empresa" />
        </div>
        <div className="titulo">
        <img src={titulo} alt="titulo" />
        </div>
        <div className="Social">
          <a href="#"><FaFacebook size={24} /></a>
          <a href="#"><FaTwitter size={24} /></a>
          <a href="#"><FaInstagram size={24} /></a>
        </div>
        <div className="Contact">
          <p>Ventas: 961-174-9237</p>
        </div>
      </div>
    </header>
  );
}

export default Header;




