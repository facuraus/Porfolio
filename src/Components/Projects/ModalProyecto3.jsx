import React, { useState } from 'react';
import proyecto3_img1 from '../../assets/proyecto3_img1.png';
import proyecto3_img2 from '../../assets/proyecto3_img2.png';
import './ModalProyecto3.css';

const Proyecto3Carousel = () => {
  const images = [proyecto3_img1, proyecto3_img2];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="modal-custom-content">
      <div className="carousel">
        <img
          src={images[index]}
          alt={`Vista ${index + 1}`}
          className="carousel-image"
        />
        <div className="carousel-buttons">
          <button onClick={prev} className="carousel-btn" aria-label="Imagen anterior">‹</button>
          <button onClick={next} className="carousel-btn" aria-label="Imagen siguiente">›</button>
        </div>
      </div>

      <div className="modal-text">
        <p><strong>Portal de Micro-Emprendimientos Comunitarios</strong></p>

        <p>
          Consistió en el diseño y prototipo de un sistema web orientado a facilitar la visibilidad de micro-emprendimientos impulsados por miembros de una comunidad organizada.
        </p>

        <p>
          El sistema fue pensado para brindar una solución integral que permitiera registrar, moderar, mostrar y patrocinar emprendimientos, facilitando también la interacción con los usuarios mediante una interfaz accesible y responsiva.
        </p>

        <br />

        <p><strong>Funcionalidades principales:</strong></p>
        <ul>
          <li>Formulario de registro de emprendedores con datos personales, rubro, formas de pago, redes sociales y zona de trabajo.</li>
          <li>Validación de nuevos emprendimientos por parte de un moderador, con notificaciones automáticas por correo.</li>
          <li>Gestión de espacios físicos, integración con geolocalización y opción de ocultar la dirección si se desea.</li>
          <li>Sistema de donaciones con dos métodos de pago: CuentaPago (virtual) y PagoNet (factura).</li>
          <li>Destacados: cada donación activa un período de promoción especial con prioridad en búsquedas.</li>
          <li>Envío automático de recordatorios, vencimientos y reportes semanales de donaciones al moderador.</li>
        </ul>

        <p><strong>Tecnologías utilizadas:</strong></p>
        <ul>
          <li><strong>HTML y CSS:</strong> prototipo visual del sistema web.</li>
          <li><strong>JavaScript:</strong> interacción y validación del cliente.</li>
        </ul>
      </div>
    </div>
  );
};

export default Proyecto3Carousel;
