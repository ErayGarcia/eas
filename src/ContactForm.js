// Importar las bibliotecas necesarias
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

// Definir el componente ContactForm
const ContactForm = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });

  // Estado adicional para almacenar los datos del formulario al presionar "Guardar"
  const [datosGuardados, setDatosGuardados] = useState(null);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Almacenar los datos del formulario en el estado adicional
    setDatosGuardados(formData);
  };

  // Renderizar el formulario
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            value={formData.nombre}
            placeholder="Nombre"
            required
          />
        </div>
        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div className="input-group">
          <FaPhone className="icon" />
          <input
            type="tel"
            name="telefono"
            onChange={handleChange}
            value={formData.telefono}
            placeholder="Teléfono"
            required
          />
        </div>
        <input type="submit" value="Guardar" />
      </form>

      {/* Mostrar los datos guardados */}
      {datosGuardados && (
        <div className="datos-guardados">
          <h2>Datos Guardados:</h2>
          <pre>{JSON.stringify(datosGuardados, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

// Exportar el componente ContactForm
export default ContactForm;
