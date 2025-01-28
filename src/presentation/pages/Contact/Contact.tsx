import "./Contact.css";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="contact-page">
      <h1>Contáctanos</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <div className="contact-info">
        <h2>Información de Contacto</h2>
        <p>Correo Electrónico: contact@example.com</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Dirección: 123 Main St, Anytown, USA</p>
      </div>

      <div className="social-media">
        <h2>Síguenos</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={50} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={50} />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
        <FaPinterest size={50} />
          </a>
        </div>
      </div>

      <div className="map">
        <h2>Nuestra Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.370647073142!2d-89.6164944!3d20.938419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5672270a784baf%3A0x764b40010695f0d9!2sUniversidad%20Tecnol%C3%B3gica%20Metropolitana!5e0!3m2!1ses!2smx!4v1698765432100!5m2!1ses!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>

      <div className="hours">
        <h2>Horario de Atención</h2>
        <p>Lunes - Viernes: 9:00 AM - 5:00 PM</p>
        <p>Sábado: 10:00 AM - 2:00 PM</p>
        <p>Domingo: Cerrado</p>
      </div>

      <div className="privacy-notice">
        <p>
          Al enviar este formulario, aceptas nuestra <a href="/privacy-policy">política de privacidad</a>.
        </p>
      </div>
    </div>
  );
};