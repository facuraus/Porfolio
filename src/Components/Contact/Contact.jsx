import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccessMessage('');

    const SERVICE_ID = 'Service_Porfolio';
    const TEMPLATE_ID = 'template_w7c9mce';
    const USER_ID = '79Vd8eq4J7ETqtrAT';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setSuccessMessage('¡Gracias por tu mensaje! Te responderé a la brevedad.');
        setFormData({ nombre: '', email: '', mensaje: '' });
      })
      .catch((error) => {
        alert('Error al enviar el mensaje. Intentá de nuevo.');
        console.error(error);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div id="contact" className="contacto-wrapper">
      <h2 className="contacto-title">Ponte en contacto conmigo</h2>
      <div className="contacto-content">
        <div className="contacto-info">
          <h3>Vamos a hablar</h3>
          <p>
            Actualmente estoy disponible para nuevos proyectos, así que no dudes en enviarme un mensaje sobre cualquier proyecto en el que quieras que trabaje. Puedes contactarme cuando quieras.
          </p>
          <p><MdEmail className="icono" /> facuraus@hotmail.com</p>
          <p><MdPhone className="icono" /> +11 2646-9172</p>
          <p><MdLocationOn className="icono" /> San Miguel, Buenos Aires</p>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            disabled={sending}
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo"
            required
            disabled={sending}
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
            rows="5"
            required
            disabled={sending}
          ></textarea>

          <button type="submit" className="btn-enviar" disabled={sending}>
            {sending ? 'Enviando...' : 'Enviar correo'}
          </button>

          {successMessage && (
            <p className="mensaje-exito">{successMessage}</p>
          )}
        </form>
      </div>

      <div className="contacto-footer">
        © 2025 Facundo Rauschenberger. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Contacto;
